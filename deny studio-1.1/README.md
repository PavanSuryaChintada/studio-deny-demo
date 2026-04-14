# Studio Deny — Landing

Editorial streetwear landing experience built with **Vite**, **React**, **Tailwind CSS**, and **Motion** (animations). Includes a multi-section homepage and client-side routes for collections (e.g. New Drop, Best Selling, Shop, categories).

## Requirements

- **Node.js** 20 or newer (see `engines` in `package.json`)

## Getting started

From a terminal, go to this folder (use quotes because of spaces in the path):

```bash
cd "path/to/ar agency works/deny studio-1.1"
```

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Start Vite in development mode       |
| `npm run build`| Production build → output in `dist/` |

## Project layout

| Path | Purpose |
|------|---------|
| `src/app/App.tsx` | Main app shell: navigation, home sections, route views |
| `src/main.tsx` | React entry |
| `src/styles/` | Global CSS, theme tokens, fonts |
| `vite.config.ts` | Vite + React + Tailwind |
| `vercel.json` | Hosting config (see below) |

## Routing

This app does **not** use React Router in the tree. Paths like `/new-drop` or `/category/men` are handled in **`App.tsx`** with `window.history.pushState`, `popstate`, and `currentPath` state. The UI swaps between the homepage and “route” layouts accordingly.

## Deploying on Vercel

The repo includes **`vercel.json`** so that:

- **Build:** `npm run build` (Vite)
- **Output:** `dist`
- **SPA fallback:** requests that are not static files are rewritten to **`/index.html`**, so deep links and refresh work on routes such as `/shop` or `/new-drop`.

Connect the Git repo in the Vercel dashboard, set the **root directory** to this folder if the repo contains other projects, then deploy.

## Stack (high level)

- **React 18** — UI
- **Tailwind CSS 4** — styling (`@tailwindcss/vite`)
- **Motion** (`motion/react`) — scroll-linked and in-view animation
- **Lucide React** — icons

Typography and colors are defined in `src/styles/theme.css` and related files (e.g. Bebas Neue + Barlow).

## License

Private project (`"private": true` in `package.json`).
