# Faizal.dev — Portfolio (Pro: Postgres + Email)

Next.js 14 + Tailwind + Prisma (Postgres) + optional Email (Resend or SMTP).

## Features
- Premium UI & animations (animated background, glows, clean cards)
- Projects from JSON for simplicity
- Contact form persists messages to **Postgres** via Prisma
- Optional email notifications via **Resend** or **SMTP (Nodemailer)**

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Environment
Create `.env` from `.env.example` and fill values:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require"

# Email (choose one)
RESEND_API_KEY=""
# or SMTP:
SMTP_HOST=""
SMTP_PORT="465"
SMTP_USER=""
SMTP_PASS=""
EMAIL_FROM="Faizal.dev <no-reply@your-domain>"
EMAIL_TO="faizalmohdrafiquebagwan@gmail.com"
```

### 3) Prisma
```bash
npm run prisma:generate
npm run prisma:migrate
# Optional:
npm run prisma:studio
```

### 4) Dev
```bash
npm run dev
# open http://localhost:3000
```

## Deploy
- On Vercel/Railway/etc., set the same env vars.
- Run `npm run prisma:deploy` for migrations in production.
- For email, either set `RESEND_API_KEY` or SMTP credentials.

## Notes
- If you prefer SQLite locally, change datasource provider and DATABASE_URL accordingly in `prisma/schema.prisma`.
