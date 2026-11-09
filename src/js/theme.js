// Tema: scelta esplicita in localStorage, altrimenti preferenza di sistema.
// Caricato nel <head> prima del CSS per evitare il flash del tema sbagliato.
(function () {
    var theme = null;
    try { theme = localStorage.getItem("jt_site_theme"); } catch (_) { }
    if (theme !== "light" && theme !== "dark") {
        theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", theme);
})();
