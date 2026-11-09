// Lingua (IT/EN) e tema light/dark del sito vetrina.
const SITE_I18N = {
  it: {
    nav_how: "Come funziona", nav_signals: "Notifiche", nav_download: "Scarica",
    nav_deals: "Finti sconti",
    trap_eyebrow: "Finti sconti", trap_h2: "Non tutti gli sconti sono affari.",
    trap_p: "Succede spesso: il prezzo sale per qualche giorno, poi arriva lo \u00absconto\u00bb che lo riporta esattamente dov'era. Un semplice avviso di calo prezzo ci cascherebbe. Just Track no: confronta ogni prezzo con l'andamento dell'ultimo periodo e ti dice se il risparmio \u00e8 reale.",
    t1_t: "Guardiamo l'andamento, non il singolo calo", t1_b: "Calcoliamo il prezzo tipico dell'ultimo periodo e quanto oscilla normalmente.",
    t2_t: "Smascheriamo i finti sconti", t2_b: "Se lo sconto riporta solo il prezzo nella norma, te lo diciamo.",
    t3_t: "Ti avvisiamo quando conviene davvero", t3_b: "Una notifica solo quando il prezzo scende sotto la norma, non a ogni ribasso.",
    trap_label: "Prezzo in offerta su Amazon", trap_lg_avg: "Prezzo tipico", trap_lg_band: "Oscillazione normale",
    trap_v_t: "Aspetta: lo sconto non \u00e8 reale", trap_v_b: "Pochi giorni fa il prezzo \u00e8 salito a \u20ac129. \u20ac99 \u00e8 il suo prezzo normale: il risparmio reale \u00e8 zero.",
    hero_eyebrow: "Tracker prezzi Amazon", hero_h1: "Compra al momento giusto.",
    hero_p: "Just Track non si limita a segnalarti i cali di prezzo: analizza l'andamento dell'ultimo periodo e ti dice quando \u00e8 davvero il momento giusto per comprare. Niente pi\u00f9 finti sconti.",
    hero_note: "Gratis \u00b7 sincronizzata su tutti i tuoi dispositivi \u00b7 sviluppata in modo indipendente",
    mk_meta: "5 prodotti \u00b7 controllati 4 min fa", mk_ready: "2 prodotti pronti", mk_ready_sub: "\u00c8 un buon momento per acquistare",
    mk_badge_low: "\u25cf Minimo storico", mk_badge_up: "\u25cf Prezzo su",
    mk_tab1: "Watchlist", mk_tab2: "Aggiungi", mk_tab3: "Impostazioni",
    how_eyebrow: "Come funziona", how_h2: "Aggiungi un prodotto in due secondi.", how_p: "Scegli tu come aggiungerlo. Al resto pensiamo noi.",
    s1_t: "Aggiungi il prodotto", s1_b: "Scegli il modo pi\u00f9 comodo:",
    o1: "Cercalo per nome nell'app", o2: "Incolla il link di Amazon", o3: "Condividilo dall'app Amazon",
    s2_t: "Seguiamo il prezzo", s2_b: "Controlliamo il prezzo pi\u00f9 volte al giorno e lo confrontiamo con l'andamento dell'ultimo periodo.",
    s3_t: "Ti avvisiamo al momento giusto", s3_b: "Una notifica quando il prezzo \u00e8 davvero conveniente rispetto all'ultimo periodo. Tu non controlli nulla.",
    sig_eyebrow: "NOTIFICHE", sig_h2: "Sappiamo quando conviene comprare.",
    sig_p: "Confrontiamo il prezzo attuale con l'andamento dell'ultimo periodo: prezzo tipico, oscillazione normale, minimo e massimo. Un colore ti dice tutto in un colpo d'occhio.",
    f1_t: "Verde \u2014 compra ora", f1_b: "Il prezzo \u00e8 nettamente sotto la norma dell'ultimo periodo.",
    f2_t: "Arancione \u2014 aspetta", f2_b: "Prezzo nella norma o sopra: conviene attendere.",
    f3_t: "Minimo storico", f3_b: "Ti segnaliamo il prezzo pi\u00f9 basso di sempre.",
    sig_peak: "\u2193 \u20ac70,00 dal picco", sig_low: "Minimo", sig_avg: "Media", sig_high: "Massimo", sig_badge: "\u25cf Minimo storico",
    final_h2: "Paga il prezzo giusto.", final_p: "Scarica Just Track e smetti di cadere nei finti sconti.",
    soon: "Presto disponibile",
    foot_copy: "Sviluppata in modo indipendente \u00b7 \u00a9 2026",
  },
  en: {
    nav_how: "How it works", nav_signals: "Signals", nav_download: "Download",
    nav_deals: "Fake deals",
    trap_eyebrow: "Fake deals", trap_h2: "Not every discount is a deal.",
    trap_p: "It happens all the time: the price goes up for a few days, then a \u201cdiscount\u201d brings it right back where it was. A simple price-drop alert would fall for it. Just Track won't: it compares every price with the recent trend and tells you whether the saving is real.",
    t1_t: "We look at the trend, not a single drop", t1_b: "We work out the typical recent price and how much it normally swings.",
    t2_t: "We unmask fake discounts", t2_b: "If a discount only brings the price back to normal, we tell you.",
    t3_t: "We alert you when it really pays off", t3_b: "A notification only when the price falls below its norm, not at every dip.",
    trap_label: "Amazon deal price", trap_lg_avg: "Typical price", trap_lg_band: "Normal swing",
    trap_v_t: "Wait: the discount isn't real", trap_v_b: "A few days ago the price jumped to \u20ac129. \u20ac99 is its normal price: the real saving is zero.",
    hero_eyebrow: "Amazon price tracker", hero_h1: "Buy at the right moment.",
    hero_p: "Just Track doesn't just flag price drops: it analyzes the recent price trend and tells you when it's really the right time to buy. No more fake deals.",
    hero_note: "Free \u00b7 synced across all your devices \u00b7 independently built",
    mk_meta: "5 products \u00b7 checked 4 min ago", mk_ready: "2 products ready", mk_ready_sub: "A good time to buy",
    mk_badge_low: "\u25cf All-time low", mk_badge_up: "\u25cf Price up",
    mk_tab1: "Watchlist", mk_tab2: "Add", mk_tab3: "Settings",
    how_eyebrow: "How it works", how_h2: "Add a product in two seconds.", how_p: "Add it however you like. We handle the rest.",
    s1_t: "Add the product", s1_b: "Pick whatever's easiest:",
    o1: "Search for it by name in the app", o2: "Paste the Amazon link", o3: "Share it from the Amazon app",
    s2_t: "We follow the price", s2_b: "We check the price several times a day and compare it with the recent trend.",
    s3_t: "We alert you at the right time", s3_b: "A notification when the price is genuinely good compared to recent weeks. You check nothing.",
    sig_eyebrow: "Price signals", sig_h2: "We know when it's worth buying.",
    sig_p: "We compare the current price with the recent trend: typical price, normal swing, lowest and highest. One color tells you everything at a glance.",
    f1_t: "Green \u2014 buy now", f1_b: "The price is well below its recent norm.",
    f2_t: "Orange \u2014 wait", f2_b: "Price at or above its norm: better to hold off.",
    f3_t: "All-time low", f3_b: "We flag the lowest price ever.",
    sig_peak: "\u2193 \u20ac70.00 from peak", sig_low: "Lowest", sig_avg: "Average", sig_high: "Highest", sig_badge: "\u25cf All-time low",
    final_h2: "Pay the right price.", final_p: "Download Just Track and stop falling for fake deals.",
    soon: "Coming soon",
    foot_copy: "Independently built \u00b7 \u00a9 2026",
  },
};
function applyLang(l) {
  const d = SITE_I18N[l] || SITE_I18N.it;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach((el) => { const k = el.getAttribute("data-i18n"); if (d[k] != null) el.textContent = d[k]; });
  document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("on", b.dataset.lang === l));
  try { localStorage.setItem("jt_site_lang", l); } catch (_) {}
}
document.querySelectorAll(".lang-btn").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
let _l = "it"; try { _l = localStorage.getItem("jt_site_lang") || "it"; } catch (_) {}
applyLang(_l);

// Toggle tema light/dark (default: sistema)
const themeBtn = document.getElementById("themeBtn");
function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); }
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("jt_site_theme", next); } catch (_) {}
});
// Segui il sistema finché l'utente non sceglie esplicitamente
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    let saved = null; try { saved = localStorage.getItem("jt_site_theme"); } catch (_) {}
    if (saved !== "light" && saved !== "dark") applyTheme(e.matches ? "dark" : "light");
  });
}

lucide.createIcons();
