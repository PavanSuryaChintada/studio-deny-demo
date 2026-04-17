# Studio Deny (Vite + React)

App folder name: **`studio deny`** (space in the name — quote paths in the terminal).

If you still have an old folder named `deny studio-1.1`, rename it to `studio deny` to match this repo.

## Database (Prisma + Supabase PostgreSQL)

1. Copy `.env.example` to `.env` in this folder.

2. Set `DATABASE_URL` and `DIRECT_URL` with your Supabase connection strings.  
   If the database password contains `@`, `#`, or `$`, **URL-encode** them in the URL:
   - `@` → `%40`
   - `#` → `%23`
   - `$` → `%24`

3. Install and sync schema:

```bash
npm install
npm run db:generate
npm run db:push
```

4. Use the singleton client from `lib/prisma.ts` in **server-side** code only (API routes / server functions). Do not import it from React components.

The Prisma schema lives in `prisma/schema.prisma`.
