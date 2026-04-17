# Studio Deny — Next.js (App Router) + NextAuth

Runs on **port 3000** alongside the Vite storefront in the parent folder.

## Setup

1. Install dependencies from this folder:

```bash
cd next-app
npm install
```

2. Create `.env.local` (see `.env.local.example`). Minimum:

- `DATABASE_URL` / `DIRECT_URL` — same PostgreSQL URLs as `../.env` (Prisma).
- `NEXTAUTH_SECRET` or `AUTH_SECRET` — random string (e.g. `openssl rand -base64 32`).
- `NEXTAUTH_URL` — `http://localhost:3000` locally; your production URL when deployed.
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`.
- In **Google Cloud Console**, add redirect URI:  
  `http://localhost:3000/api/auth/callback/google`

3. Generate Prisma client (schema lives in `../prisma/schema.prisma`):

```bash
npm run predev
# or: npx prisma generate --schema ../prisma/schema.prisma
```

4. Dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Files

- `lib/auth.ts` — NextAuth (Google + credentials), JWT sessions.
- `app/api/auth/[...nextauth]/route.ts` — Auth.js handlers.
- `app/api/auth/register/route.ts` — Email/password registration (bcrypt).
- `components/auth/AuthModal.tsx` — Minimal auth UI.

## Vite storefront

The existing Vite app is started from the parent directory with `npm run dev` (port 5173). This Next app is separate until you merge hosting.
