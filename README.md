[README.md](https://github.com/user-attachments/files/22184083/README.md)
# Workout Rest Timer

A tiny, polished PWA for timing rest periods between sets. Works great on phone and desktop, supports offline use, haptics/sounds, and quick presets.

## Features
- Big circular ring timer with 15s nudges, Skip, Back, Pause/Resume
- Presets (tap to select), plus **Custom** presets with minutes/seconds/sets dials
- **Manage** presets (delete) and **Settings** (Sounds/Haptics, Notifications, Light/Dark/Auto)
- **Daily log** of finished workouts (local-only; resets daily)
- Offline support via Service Worker
- iPhone-specific: **locks to portrait** on small iPhones only; iPad & larger screens can rotate

## What’s local vs. synced?
Everything is **local-only** (uses `localStorage`). No Firebase, no cloud sync.

## Files in this repo
```
index.html            # The app (no frameworks; all vanilla)
sw.js                 # Service worker for offline + notifications
site.webmanifest      # PWA manifest
icon-192.png          # (already in your repo)
icon-512.png          # (already in your repo)
resttimer-roundcap-*.svg  # (already in your repo)
apple-touch-icon-180.png  # (already in your repo)
```
> You can delete `manifest.webmanifest` if it exists; the app uses `site.webmanifest`.

## Run locally
Just open `index.html` in a browser. For PWA features (SW/notifications), serve from any static server (e.g., VS Code Live Server, `python -m http.server`, or GitHub Pages).

## Deploy
- **GitHub Pages**: push to `main` and enable Pages from your repo settings (root).  
- Any static host (Netlify, Vercel, Cloudflare Pages) also works.

## Updating
- Change presets or theme tokens in `index.html` as desired.
- If you add/rename icons, update both `site.webmanifest` **and** the `ASSETS` list in `sw.js`.

## Clearing old cache
If you change the asset list, bump `CACHE` in `sw.js` (e.g., `resttimer-cache-v3`), then reload the app.
