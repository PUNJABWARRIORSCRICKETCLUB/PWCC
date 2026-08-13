# Punjab Warriors Cricket Club — Website

## 1. Open the site
Open `index.html` in a browser.

For best results, run it from a local server:
- VS Code + Live Server, or
- `python -m http.server`

## 2. Where to edit
- `data.js` = players, fixtures, results, standings, news, gallery, videos, sponsors, social links and team information.
- `styles.css` = all visual design and responsive behavior.
- `script.js` = animations, rendering and interactions.
- `assets/main-logo.png` = main website logo.
- `assets/loader-logo.png` = detailed loader logo.
- `assets/coming-soon-jersey.svg` = temporary official jersey placeholder; replace its path in `data.js` when the final jersey image is ready.

## 3. Main pages
- `index.html` — homepage
- `fixtures.html` — fixtures
- `results.html` — results + Warrior of the Match
- `standings.html` — league standings
- `player.html?id=warrior-01` — dynamic player profile
- `team.html`, `vision.html`, `values.html` — editable club information pages

## 4. Important
The contact and tryout forms are front-end demo forms. Connect them to Formspree, Netlify Forms, Google Forms, or your own backend before production.

The hero slideshow uses direct Unsplash image URLs as clean, replaceable examples. Change the URLs in `data.js` and the three hero background URLs in `index.html` when you are ready to use your own licensed stadium photography.

## Coming Soon image infrastructure

This version deliberately uses clearly labeled `COMING SOON` SVG placeholders for player photos, the official jersey, opponent/match art, sponsor logos, gallery photos, news images and videos. Replace the image path values in `data.js` when real assets are available. See `assets/ASSET-REPLACEMENT-GUIDE.txt` for the exact fields.
