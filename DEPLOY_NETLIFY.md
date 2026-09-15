# Deploy Aceapp v50 with GitHub → Netlify

1. Upload `aceapp-release-v50-readiness-matrix.zip` to the repository root.
2. Keep the updater workflow in `.github/workflows/`.
3. Run **Update Aceapp from v50 Readiness Matrix release ZIP** from GitHub Actions.
4. The workflow replaces the previous site files and commits v50 to `main`.
5. Netlify deploys the committed root site directly.

Netlify build command should remain blank (or `true`) and publish directory should remain `.`.

If an older build remains visible, use **Deploy project without cache** once. v50 uses a new service-worker cache key and registration query.
