(function () {
  var cfg = window.RASHADOOZ || {};
  var repo = "https://github.com/" + cfg.repo;
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  each("[data-iso-link]", function (a) { a.href = repo + "/releases/latest/download/" + cfg.isoName; });
  each("[data-releases-link]", function (a) { a.href = repo + "/releases"; });
  each("[data-issues-link]", function (a) { a.href = repo + "/issues"; });
  each("[data-discuss-link]", function (a) { a.href = repo + "/discussions"; });
  each("[data-repo-link]", function (a) { a.href = repo; });
  each(".ver2, #ver", function (e) { e.textContent = cfg.version; });

  var html = document.documentElement;
  var btn = document.getElementById("lang");
  function setLang(l) {
    html.lang = l;
    html.dir = l === "ar" ? "rtl" : "ltr";
    btn.textContent = l === "ar" ? "English" : "العربية";
    document.title = "RASHADOOZ OS";
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (!saved && (navigator.language || "").slice(0, 2) !== "ar") saved = "en";
  setLang(saved === "en" ? "en" : "ar");
  btn.addEventListener("click", function () { setLang(html.lang === "ar" ? "en" : "ar"); });

  var term = document.getElementById("term");
  if (term && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var full = term.innerHTML;
    var marker = "info\n";
    var cut = full.indexOf(marker) + marker.length;
    var head = full.slice(0, cut - 5);
    var tail = full.slice(cut);
    var typed = "info";
    var i = 0;
    term.innerHTML = head + '<span class="cur"></span>';
    setTimeout(function step() {
      i++;
      term.innerHTML = head + typed.slice(0, i) + '<span class="cur"></span>';
      if (i < typed.length) setTimeout(step, 140);
      else setTimeout(function () { term.innerHTML = full; }, 450);
    }, 700);
  }
})();
