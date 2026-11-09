# Just Track — sito vetrina

> Landing page statica di Just Track, pubblicata su GitHub Pages all'indirizzo https://just-track.it.

## Panoramica

| Cartella | Contenuto |
|---|---|
| `src/` | Il sito: `index.html`, `css/` (token del design system e skin), `js/`, `assets/`, `lib/` |
| `.github/workflows/pages.yml` | Deploy su GitHub Pages a ogni push su `main` |

Il repository è pubblico e contiene **solo** il sito. App, backend e configurazione stanno nel repository privato `just-track`.

## Stack

- HTML statico, Bootstrap 5.3.7 e Lucide 0.460.0 self-hosted in `src/lib/`.
- Token del design system Just Track in `src/css/tokens/`.
- Testi IT/EN in `src/js/site.js` (`SITE_I18N`), tema light/dark in `src/js/theme.js`.
- Nessuno script inline.

## Branch e contribuzione

Branch `main` = produzione: ogni push pubblica il sito.
