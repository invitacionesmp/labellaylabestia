/* Carrusel de fotos: se desliza con el dedo (scroll-snap del navegador), con puntos y flechas.
   Las fotos se cargan desde cfg.fotos (js/config.js). Sin animaciones pesadas ni autoavance. */
(function () {
  var cfg = window.INVITACION, sec = document.getElementById("galeria");
  if (!sec) return;
  var fotos = (cfg.fotos || []).filter(Boolean);
  if (!fotos.length) { sec.parentNode.removeChild(sec); return; }

  var pista = document.getElementById("galeria-pista");
  var nav = document.getElementById("galeria-nav");
  var puntos = document.getElementById("galeria-puntos");
  var ant = document.getElementById("galeria-ant"), sig = document.getElementById("galeria-sig");
  var suave = !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var slides = [], dots = [], actual = -1, pendiente = false;

  fotos.forEach(function (f, i) {
    if (typeof f === "string") f = { src: f };
    var fig = document.createElement("figure"); fig.className = "foto";
    var img = document.createElement("img");
    img.src = f.src; img.alt = f.alt || ("Foto " + (i + 1) + " de " + cfg.nombre);
    img.loading = "lazy"; img.decoding = "async"; img.draggable = false;
    fig.appendChild(img); pista.appendChild(fig); slides.push(fig);

    var d = document.createElement("button");
    d.type = "button"; d.className = "punto"; d.setAttribute("aria-label", "Ir a la foto " + (i + 1));
    d.addEventListener("click", function () { ir(i); });
    puntos.appendChild(d); dots.push(d);
  });
  if (fotos.length < 2) nav.hidden = true;

  function ir(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    var s = slides[i];
    pista.scrollTo({ left: s.offsetLeft - (pista.clientWidth - s.offsetWidth) / 2, behavior: suave ? "smooth" : "auto" });
  }

  function marcar() {
    pendiente = false;
    var centro = pista.scrollLeft + pista.clientWidth / 2, mejor = 0, dist = Infinity;
    slides.forEach(function (s, i) {
      var d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - centro);
      if (d < dist) { dist = d; mejor = i; }
    });
    if (mejor === actual) return;
    actual = mejor;
    slides.forEach(function (s, i) { s.classList.toggle("activa", i === mejor); });
    dots.forEach(function (d, i) {
      d.classList.toggle("activo", i === mejor);
      if (i === mejor) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
    });
    ant.disabled = mejor === 0; sig.disabled = mejor === slides.length - 1;
  }

  pista.addEventListener("scroll", function () {
    if (!pendiente) { pendiente = true; requestAnimationFrame(marcar); }
  }, { passive: true });
  window.addEventListener("resize", function () { actual = -1; marcar(); });
  ant.addEventListener("click", function () { ir(actual - 1); });
  sig.addEventListener("click", function () { ir(actual + 1); });
  marcar();
})();
