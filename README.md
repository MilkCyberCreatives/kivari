# KIVARI Construction Website

Production website for KIVARI (Pty) Ltd built with Next.js (Pages Router) and Tailwind CSS.

## Key Features
- Premium responsive UI with smooth scroll and motion effects
- SEO, AEO, and GEO foundations (schema, FAQ schema, llms.txt)
- Functional contact forms with SMTP delivery (`/api/contact`)
- Google Analytics 4 and Google Tag Manager integration hooks

## Local Development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables
Copy `.env.example` and set values:

```bash
NEXT_PUBLIC_SITE_URL=https://www.kivari.co.za
NEXT_PUBLIC_DISPLAY_EMAIL=info1.kivari@gmail.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
CONTACT_TO_EMAIL=info@kivari.co.za
SMTP_HOST=mail.kivari.co.za
SMTP_PORT=465
SMTP_USER=info@kivari.co.za
SMTP_PASS=your_smtp_password
SMTP_SECURE=true
SMTP_FROM_NAME=KIVARI Website
SMTP_FROM_EMAIL=info@kivari.co.za
```

## Build
```bash
npm run build
npm run start
```

## Vercel
- Link project: `npx vercel link --project kivari`
- Deploy production: `npx vercel --prod`
- Ensure env vars are added in Vercel for Production/Preview/Development.
