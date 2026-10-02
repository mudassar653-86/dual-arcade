# Duel Arcade — Vercel Deployment

This is a self-contained static browser game hub. The games are embedded in `index.html`; no server, database, Prisma, or external backend is required.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Open Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Let Vercel auto-detect the project. No framework-specific configuration is required.
5. Build Command: `npm run build`.
6. Output Directory: leave the default/root setting for a static project.
7. Environment Variables: none required.
8. Click **Deploy**.

## Local verification

```bash
npm install
npm run build
```

No database connection or environment variables are needed.
