# cPanel migration candidate

Build with `npm ci && npm run build`. The static site is in `out/`; Apache rules
in `public/.htaccess` replace Next's runtime routing and headers.

Install `out/` contents into `/home/kivarico/public_html` and `hosting/app/`
into `/home/kivarico/kivari-app`. Run Composer install from the lockfile before
packaging. The private application includes PHPMailer, a local-only config.php
and rate-limit files. Never put this directory or credentials in public_html.
The tiny public `/api/contact.php` bootstrap loads the private application.

Private config uses the previous SMTP_* and CONTACT_TO_EMAIL keys. SMTP_HOST is
the verified server s45.registerdomain.net.za because mail.kivari.co.za currently
aliases the website apex. Authentication passed without sending mail. Secrets
and vendor files are ignored by Git. Release archives containing config.php are
private and must never be committed or put in a publicly accessible folder.

Original Node endpoint is retained in hosting/reference/contact.node.txt for
review. The PHP endpoint preserves contact/quick-inquiry validation, the company
honeypot, six requests per 15 minutes, and sends success only after SMTP accepts
the message. Connection IPs are used instead of trusting forwarded headers.

25 November 2026: build, PHP syntax, isolated negative-path checks and SMTP
authentication pass. Web-root rollback archive exists outside public_html as
kivari-before-migration-20261125.zip. Installation, on-host verification and DNS
cutover are pending. Origin is 129.232.156.138. Previous DNS: apex A 216.198.79.1,
www CNAME fce5677016b094d3.vercel-dns-017.com, TTL 3600. Preserve mail records.
Do not delete Vercel until public pages and both enquiry forms pass acceptance.
