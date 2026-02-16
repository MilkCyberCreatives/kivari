import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 6;

const requestLog =
  global.__kivariContactRateLimit || new Map();
if (!global.__kivariContactRateLimit) {
  global.__kivariContactRateLimit = requestLog;
}

function trimValue(value, max = 1000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
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

function isRateLimited(ip) {
  const now = Date.now();
  const recentRequests = (requestLog.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return false;
}

export default async function handler(req, res) {
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

  const formType = trimValue(req.body?.formType, 40) || "contact";
  const name = trimValue(req.body?.name, 120);
  const email = trimValue(req.body?.email, 180);
  const phone = trimValue(req.body?.phone, 80);
  const subject = trimValue(req.body?.subject, 180);
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
  } else {
    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required." });
    }
  }

  if (email && !isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@kivari.co.za";
  const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
  const fromName = process.env.SMTP_FROM_NAME || "KIVARI Website";

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
    `IP: ${ip}`,
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
    <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
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
    console.error("Contact form send failed:", error);
    return res.status(500).json({ error: "Unable to send your message right now." });
  }
}
