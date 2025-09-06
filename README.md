[README.md](https://github.com/user-attachments/files/22183918/README.md)
# Workout Rest Timer

A lightweight, mobile-friendly rest timer PWA with presets, per-set logs, sounds/haptics, and optional Firebase sync.
This build includes **restored modal styling**, a **Cancel** label fix, and an **iPhone-only landscape overlay** (iPads can rotate freely).

## Features
- Large circular timer with last‑3‑seconds pulse
- Quick presets (time × sets), plus a custom preset dial (min/sec/sets)
- Per‑workout daily log (letters A…Z), clears per day
- Sounds and haptics (toggle)
- Optional browser notifications (via Service Worker)
- Theme: Light / Dark / Auto
- Local persistence via `localStorage`
- Optional Firestore sync for presets (bring‑your‑own Firebase config)

## Project Structure
```
/
├─ index.html                  # Full app (UI, logic, styling)
├─ config.js                   # Optional Firebase config (safe defaults)
├─ manifest.json               # PWA manifest
├─ sw.js                       # Minimal service worker
├─ assets/
│  ├─ apple-touch-icon.png
│  ├─ icon-192.png
│  ├─ icon-512.png
│  ├─ resttimer-roundcap-light.svg
│  └─ resttimer-roundcap-dark.svg
└─ README.md                   # This file
```

## Quick Start
- Just open `index.html` in a modern browser.
- For Notifications to work, a service worker must be registered **over HTTPS** or on `http://localhost`.

## Firebase (Optional)
If you want presets to sync across devices, fill in your Firebase Web config in **`config.js`**:
```js
window.__app_id = "workout-rest-timer"; // any string (used for Firestore path)
window.__firebase_config = {
  // apiKey: "...",
  // authDomain: "...",
  // projectId: "...",
  // storageBucket: "...",
  // messagingSenderId: "...",
  // appId: "..."
};
// Optional: custom auth token if you manage auth yourself
// window.__initial_auth_token = "...";
```
If left empty, the app runs in **local‑only** mode.

## PWA Notes
- The app ships with a `manifest.json` and registers `sw.js` on load.
- Add the app to your home screen for a full‑screen timer experience.

## iPhone / iPad Orientation
- **Small iPhones** (e.g., 13 mini/SE sizes) will see a gentle overlay when in **landscape**, nudging to rotate to portrait.
- **iPads and larger screens** rotate freely — no overlay.

## Keyboard Shortcuts
- **Space**: Start/Pause
- **← / →**: Back / Skip set
- **+ / -**: +15s / −15s

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload **all files and folders** exactly as shown above (keep the `assets/` path).
3. In your repo: **Settings → Pages → Build and deployment**  
   - Source: **Deploy from a branch**  
   - Branch: **main** (/**root**)
4. Save. Wait for the Pages URL to appear and load it in the browser.
5. (Optional) Add your Firebase config to `config.js`, commit, and refresh the page.

## Troubleshooting
- **No notification banner**: Service Workers require HTTPS (or `localhost`). On iOS, web push requires iOS 16.4+ and user permission.
- **No sound on first play**: Browsers block audio until a user gesture. Tap anywhere to unlock audio (the app handles this).
- **Firestore not syncing**: Check your Firebase project rules and the browser console (Firestore **debug logs are enabled**).

Enjoy! 💪
