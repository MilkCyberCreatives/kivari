<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
umask(0077);
$orineam = defined('CONTACT_SITE') && CONTACT_SITE === 'orineam';
$domain = $orineam ? 'orineamtraders.co.za' : 'kivari.co.za';

function respond(int $status, string $message, bool $success = false): never {
    global $orineam;
    http_response_code($status);
    echo json_encode($success
        ? ['ok' => true, 'message' => $message]
        : [($orineam ? 'message' : 'error') => $message], JSON_UNESCAPED_SLASHES);
    exit;
}
function value(array $body, string $key, int $max, bool $header = false): string {
    $text = is_string($body[$key] ?? null) ? trim($body[$key]) : '';
    if ($header) $text = str_replace(["\r", "\n"], ' ', $text);
    return function_exists('mb_substr') ? mb_substr($text, 0, $max) : substr($text, 0, $max);
}
function rateLimit(): void {
    $directory = __DIR__ . '/rate-limit';
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        respond(503, 'Please try again later.');
    }
    // Use the connection address, never an untrusted forwarded header.
    $file = $directory . '/' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown') . '.json';
    $handle = fopen($file, 'c+');
    if (!$handle || !flock($handle, LOCK_EX)) respond(503, 'Please try again later.');
    $now = time();
    $timestamps = json_decode(stream_get_contents($handle), true);
    $timestamps = array_values(array_filter(is_array($timestamps) ? $timestamps : [],
        static fn($time) => is_int($time) && $time > $now - 900));
    if (count($timestamps) >= 6) {
        flock($handle, LOCK_UN);
        fclose($handle);
        header('Retry-After: 900');
        respond(429, 'Too many requests. Please try again later.');
    }
    $timestamps[] = $now;
    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($timestamps));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    // Expire inactive addresses so the limiter does not grow indefinitely.
    if (random_int(1, 100) === 1) {
        foreach (glob($directory . '/*.json') ?: [] as $old) {
            if (filemtime($old) < $now - 3600) @unlink($old);
        }
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Method not allowed');
}
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ['https://' . $domain, 'https://www.' . $domain], true)) {
    respond(403, 'Invalid request origin.');
}
if (!str_starts_with(strtolower($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json')) {
    respond(415, 'JSON content is required.');
}
$raw = file_get_contents('php://input', false, null, 0, 10241);
if ($raw === false || strlen($raw) > 10240) respond(413, 'Request is too large.');
$body = json_decode($raw, true);
if (!is_array($body) || array_is_list($body)) respond(400, 'Invalid form data.');
rateLimit();
$name = value($body, 'name', 120, true);
$email = value($body, 'email', 254, true);
$phone = value($body, 'phone', 80, true);
$company = value($body, 'company', 120);
$message = value($body, 'message', $orineam ? 4000 : 5000);
$formType = value($body, 'formType', 40, true) ?: 'contact';
$projectType = value($body, 'projectType', 120, true);
$subject = value($body, 'subject', 180, true);
if (!$orineam && $company !== '') respond(200, 'Message sent successfully.', true);
if ($orineam) {
    // Match the previous API's full length limits instead of silently truncating.
    foreach (['name' => 120, 'email' => 254, 'company' => 120, 'projectType' => 120, 'message' => 4000] as $key => $max) {
        if (isset($body[$key]) && (!is_string($body[$key]) || strlen(trim($body[$key])) > $max)) {
            respond(400, 'Invalid form data.');
        }
    }
    if (strlen($name) < 2 || strlen($projectType) < 2 || strlen($message) < 10 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond(400, 'Invalid form data.');
    }
} else {
    if ($name === '') respond(400, 'Name is required.');
    if ($formType === 'quick-inquiry' && $phone === '') respond(400, 'Phone is required.');
    if ($formType !== 'quick-inquiry' && ($email === '' || $message === '')) respond(400, 'Email and message are required.');
    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) respond(400, 'Please provide a valid email address.');
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) respond(503, 'Contact form is temporarily unavailable. Please contact the office directly.');
$config = require $configFile;
foreach (['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'] as $key) {
    if (empty($config[$key])) respond(503, 'Contact form is temporarily unavailable. Please contact the office directly.');
}
require __DIR__ . '/vendor/autoload.php';
$id = bin2hex(random_bytes(16));
$createdAt = gmdate('c');
$submission = compact('id', 'createdAt', 'name', 'email', 'company', 'projectType', 'message');
$submission['ip'] = $_SERVER['REMOTE_ADDR'] ?? null;
if ($orineam) {
    $dataDir = __DIR__ . '/data';
    if ((!is_dir($dataDir) && !mkdir($dataDir, 0700, true)) ||
        file_put_contents($dataDir . '/contact-submissions.ndjson', json_encode($submission) . "\n", FILE_APPEND | LOCK_EX) === false) {
        error_log('CONTACT_PERSIST_ERROR ' . $id);
        respond(503, 'Unable to save your inquiry right now. Please try again.');
    }
}
try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string)$config['SMTP_HOST'];
    $mail->Port = (int)($config['SMTP_PORT'] ?? 465);
    $mail->SMTPAuth = true;
    $mail->Username = (string)$config['SMTP_USER'];
    $mail->Password = (string)$config['SMTP_PASS'];
    $secure = isset($config['SMTP_SECURE']) ? strtolower((string)$config['SMTP_SECURE']) === 'true' : $mail->Port === 465;
    $mail->SMTPSecure = $secure ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Timeout = 20;
    $mail->CharSet = 'UTF-8';
    $from = (string)($config[$orineam ? 'SMTP_FROM' : 'SMTP_FROM_EMAIL'] ?? $config['SMTP_USER']);
    $to = (string)($config[$orineam ? 'SMTP_TO' : 'CONTACT_TO_EMAIL'] ?? ($orineam ? $config['SMTP_USER'] : 'info@kivari.co.za'));
    $mail->setFrom($from, (string)($config['SMTP_FROM_NAME'] ?? ($orineam ? 'Orineam Traders' : 'KIVARI Website')));
    foreach (explode(',', $to) as $recipient) $mail->addAddress(trim($recipient));
    if ($email !== '') $mail->addReplyTo($email, $name);
    $mail->Subject = $orineam ? "New inquiry from {$name} ({$projectType})" : '[KIVARI] ' . ($subject ?: ($formType === 'quick-inquiry' ? 'Quick Inquiry' : 'Website Contact'));
    $mail->Body = implode("\n", [
        $orineam ? 'New website inquiry' : 'New website enquiry',
        "Form Type: {$formType}", "Name: {$name}", "Email: {$email}", "Phone: {$phone}",
        "Company: {$company}", "Project Type: {$projectType}", "Subject: {$subject}", '',
        $message ?: 'Callback requested from footer form.', '', "Submitted: {$createdAt}", "Submission ID: {$id}",
    ]);
    $mail->send();
} catch (Throwable $error) {
    error_log('CONTACT_SMTP_ERROR ' . $id);
    respond(503, 'Unable to send your message right now. Please try again or contact the office directly.');
}
respond(200, $orineam ? 'Inquiry sent successfully.' : 'Message sent successfully.', true);
