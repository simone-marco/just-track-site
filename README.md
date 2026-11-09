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

## Come si esegue in locale

Basta un server statico sulla cartella `src`:

```powershell
npx serve src
```

oppure:

```powershell
python -m http.server 8080 --directory src
```

## Pubblicazione

1. **Settings → Pages → Source**: *GitHub Actions*.
2. **Settings → Pages → Custom domain**: `just-track.it`, poi **Enforce HTTPS**.
3. Dominio verificato nelle impostazioni dell'account GitHub (**Settings → Pages → Verified domains**), così nessun altro repository può usarlo.

### DNS su Register.it

| Tipo | Nome | Valore |
|---|---|---|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `simone-marco.github.io` |
| TXT | `_github-pages-challenge-simone-marco` | codice fornito da GitHub in fase di verifica |

## Branch e contribuzione

Branch `main` = produzione: ogni push pubblica il sito.
