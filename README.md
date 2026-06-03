# DAxis Engineering Consultancy — Website

A 2-page corporate site with a 7-field enquiry form that posts to a
self-hosted **Node + Express** API and a **PostgreSQL** database managed
via **Drizzle ORM**. Email notifications go out through **Resend**.

This stack intentionally avoids Supabase / Firebase / Next.js to keep
maximum low-level control over every layer.

```
┌──────────────────┐      POST /api/enquiries      ┌──────────────────┐
│  React (Vite)    │ ───────────────────────────►  │  Express (Node)  │
│  RHF + Zod form  │                                │  Zod validator   │
└──────────────────┘                                └────────┬─────────┘
                                                               │ Drizzle
                                                               ▼
                                                      ┌──────────────────┐
                                                      │  Postgres        │
                                                      │  (Neon / local)  │
                                                      └──────────────────┘
                                                               │
                                                               │ row inserted
                                                               ▼
                                                      ┌──────────────────┐
                                                      │  Resend API      │
                                                      │  → admin email   │
                                                      └──────────────────┘
```

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite + TypeScript + React Hook Form + Zod |
| Backend | Node 20 + Express 4 + TypeScript |
| Database | PostgreSQL 16 (Neon / Railway / local) |
| ORM | Drizzle ORM + Drizzle Kit (migrations) |
| Email | Resend (transactional) |
| Security | Helmet, CORS, express-rate-limit, Basic Auth on admin routes |

## Layout (npm workspaces monorepo)

```
daxis-stack/
├── client/        React + Vite SPA
├── server/        Express + Drizzle API
└── shared/        Zod schemas + types (shared between client & server)
```

The `shared` workspace guarantees the form payload contract is defined
exactly once and validated on both sides.

## Setup

### 1. Install dependencies

```bash
cd daxis-stack
npm install
```

### 2. Set up the database

Easiest path: create a free Postgres database on [Neon](https://neon.tech).
Copy the connection string — it looks like:
`postgresql://user:pass@ep-xxx.region.aws.neon.tech/daxis?sslmode=require`

### 3. Configure environment

```bash
cp server/.env.example server/.env
# edit server/.env and fill in DATABASE_URL, RESEND_API_KEY, etc.
```

### 4. Run migrations

```bash
npm run db:generate   # generate SQL from schema (only if you changed schema.ts)
npm run db:migrate    # apply migrations to your database
```

### 5. Start dev servers

```bash
npm run dev
```

This runs both the API (`:4000`) and the Vite dev server (`:5173`) in
parallel. The Vite dev server proxies `/api/*` to the Express server,
so the frontend just calls relative URLs.

Open [http://localhost:5173](http://localhost:5173).

## API

### `POST /api/enquiries` — public

Body (matches `shared/src/index.ts` schema):

```json
{
  "fullName": "Sunil Sharma",
  "email": "sunil@example.com",
  "phone": "9910461833",
  "companyName": "Acme Engineering",
  "serviceRequired": "Engineering Design & Drafting",
  "city": "New Delhi",
  "message": "Need 2D drafting for a 50MW substation project."
}
```

Response `201`:

```json
{ "ok": true, "id": 42, "receivedAt": "2026-06-03T08:30:00.000Z" }
```

Rate-limited to **5 submissions per 15 minutes per IP**.

### `GET /api/admin/enquiries` — protected

Basic Auth (set `ADMIN_USER` / `ADMIN_PASS` in `.env`). Returns the 100
most recent enquiries.

### `PATCH /api/admin/enquiries/:id` — protected

Body: `{ "status": "new" | "contacted" | "closed" }`

## Database schema

One table. No foreign keys, no joins. Mirrors PRD §4.2.

| Column | Type | Notes |
|---|---|---|
| `id` | `BIGSERIAL` | PK |
| `created_at` | `TIMESTAMPTZ` | default `now()` |
| `full_name` | `TEXT` | NOT NULL |
| `email` | `TEXT` | NOT NULL |
| `phone` | `TEXT` | NOT NULL |
| `message` | `TEXT` | nullable |
| `company_name` | `TEXT` | nullable |
| `service_required` | `TEXT` | nullable, app-level enum |
| `city` | `TEXT` | nullable |
| `status` | `TEXT` | default `'new'` |
| `source` | `TEXT` | default `'website'` |

Defined in `server/src/db/schema.ts`. The `bigserial`/`text`/`timestamp`
imports come from `drizzle-orm/pg-core` — fully typed, no codegen step.

## Email flow

1. Form submits → Express validates → Drizzle inserts a row
2. Express returns `201` to the user **immediately**
3. Email is fired in the background (`void sendEnquiryNotification(row)`)
4. If Resend is down, the enquiry is still safe in the DB — the user is
   not blocked by a third-party outage

The email body is built in `server/src/lib/email.ts` with a tiny HTML
escaper so user-submitted values can't inject HTML into the admin inbox.

## Production checklist

- [ ] Set `NODE_ENV=production` on the host
- [ ] Generate a real `ADMIN_PASS` (not the default)
- [ ] Verify a sender domain in Resend (replace `onboarding@resend.dev`)
- [ ] Add a real CAPTCHA (hCaptcha / Cloudflare Turnstile) before the
      rate limit if you expect real traffic
- [ ] Set up log shipping (Pino writes structured JSON in production)
- [ ] Configure CORS_ORIGIN to the deployed frontend URL

## Deploy

- **Database** → Neon free tier (scale-to-zero, branching)
- **Backend** → Render / Railway / Fly.io (all have free tiers)
- **Frontend** → Vercel / Netlify / Cloudflare Pages (all have free tiers)

The whole thing runs at **₹0/month** for low traffic.
