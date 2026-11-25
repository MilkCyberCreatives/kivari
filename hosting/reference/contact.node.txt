import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 6;
const RATE_LIMIT_PRUNE_THRESHOLD = 250;

const requestLog = global.__kivariContactRateLimit || new Map();
if (!global.__kivariContactRateLimit) {
  global.__kivariContactRateLimit = requestLog;
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10kb",
    },
  },
};

function trimValue(value, max = 1000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function cleanHeaderValue(value, max = 180) {
  return trimValue(value, max).replace(/[\r\n]+/g, " ");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function pruneRequestLog(now) {
  if (requestLog.size < RATE_LIMIT_PRUNE_THRESHOLD) return;

  for (const [key, timestamps] of requestLog.entries()) {
    const hasRecentRequest = timestamps.some(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
    );
    if (!hasRecentRequest) requestLog.delete(key);
  }
}

function isRateLimited(ip) {
  const now = Date.now();
  pruneRequestLog(now);

  const recentRequests = (requestLog.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return false;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const forwardedFor = req.headers["x-forwarded-for"];
  const ip =
    (typeof forwardedFor === "string" ? forwardedFor.split(",")[0].trim() : "") ||
    req.socket?.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  const formType = cleanHeaderValue(req.body?.formType, 40) || "contact";
  const name = cleanHeaderValue(req.body?.name, 120);
  const email = cleanHeaderValue(req.body?.email, 180);
  const phone = cleanHeaderValue(req.body?.phone, 80);
  const subject = cleanHeaderValue(req.body?.subject, 180);
  const message = trimValue(req.body?.message, 5000);
  const company = trimValue(req.body?.company, 120);

  // Honeypot: accept silently to reduce spam retries.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  if (formType === "quick-inquiry") {
    if (!phone) {
      return res.status(400).json({ error: "Phone is required." });
    }
  } else if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  if (email && !isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const smtpHost = (process.env.SMTP_HOST || "").trim();
  const smtpPort = Number((process.env.SMTP_PORT || "465").trim());
  const smtpUser = (process.env.SMTP_USER || "").trim();
  const smtpPass = process.env.SMTP_PASS || "";
  const smtpSecure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE.trim() === "true"
    : smtpPort === 465;
  const toEmail = (process.env.CONTACT_TO_EMAIL || "info@kivari.co.za").trim();
  const fromEmail = (process.env.SMTP_FROM_EMAIL || smtpUser).trim();
  const fromName = (process.env.SMTP_FROM_NAME || "KIVARI Website").trim();

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !fromEmail) {
    return res.status(500).json({ error: "Email service is not configured yet." });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const normalizedSubject =
    subject || (formType === "quick-inquiry" ? "Quick Inquiry" : "Website Contact");
  const timestamp = new Date().toISOString();

  const textBody = [
    `Form Type: ${formType}`,
    `Name: ${name || "-"}`,
    `Email: ${email || "-"}`,
    `Phone: ${phone || "-"}`,
    `Subject: ${normalizedSubject}`,
    "",
    "Message:",
    message || "Callback requested from footer form.",
    "",
    `Timestamp: ${timestamp}`,
  ].join("\n");

  const htmlBody = `
    <h2>New Website Enquiry</h2>
    <p><strong>Form Type:</strong> ${escapeHtml(formType)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name || "-")}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "-")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(normalizedSubject)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(message || "Callback requested from footer form.")}</p>
    <p><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email || undefined,
      subject: `[KIVARI] ${normalizedSubject}`,
      text: textBody,
      html: htmlBody,
    });

    return res.status(200).json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form send failed", {
      code: error?.code || "unknown",
      command: error?.command || "unknown",
    });
    return res.status(500).json({ error: "Unable to send your message right now." });
  }
}
