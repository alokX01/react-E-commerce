# Deployment Guide

This app is a Vite + React SPA (client-side routing with `react-router-dom`), so route fallback is required in production.

## 1) Environment Variables

Create `.env` (or set variables in your hosting dashboard):

```env
VITE_API_BASE_URL=https://fakestoreapi.com
VITE_BASE_PATH=/
```

Notes:
- Keep `VITE_BASE_PATH=/` for Vercel/Netlify root deployments.
- If you deploy under a sub-path, set `VITE_BASE_PATH` to that path (example: `/my-app/`).

## 2) Local Production Check

```bash
npm install
npm run check
npm run preview
```

## 3) Recommended Deploy Option: Vercel

Why:
- Best DX for Vite React apps
- Fast global CDN
- Simple Git-based deploys

Settings:
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Add env vars from section 1

`vercel.json` is already added with SPA rewrite support.

## 4) Recommended Deploy Option: Netlify

Settings:
- Build Command: `npm run build`
- Publish Directory: `dist`
- Add env vars from section 1

`netlify.toml` and `public/_redirects` are already added for SPA fallback.

## 5) Node Version

Use Node `20.19+` (defined in `package.json` engines). Vite 7 expects modern Node versions.
