!(function () {
  function e(e) {
    (document.title = e.title),
      (document.body.innerHTML = e.body),
      document.body.classList.add("page-404");
  }
  var t,
    o,
    n,
    l = document.querySelector(".btn"),
    s = document.querySelector(".darkroom"),
    i = document.querySelector(".giftroom"),
    a = document.querySelector(".hallway"),
    c = document.querySelector(".empty-room"),
    r = document.querySelector(".flash"),
    u = document.querySelectorAll(".bb-text"),
    d = document.querySelectorAll(".gift-text"),
    y = document.querySelectorAll(".hall-text"),
    m = document.querySelectorAll(".room-text"),
    p = document.querySelector(".btn-ref"),
    f = document.querySelectorAll(".frame"),
    L = document.querySelector(".scroll"),
    b = document.querySelector(".text"),
    S = document.querySelector(".switch-aud"),
    h = document.querySelector(".blast-aud"),
    T = document.querySelector(".door-aud"),
    q = document.querySelector(".haunt-aud"),
    g = document.querySelector(".hbd-aud"),
    k = function (e) {
      for (
        var t = function (t) {
            setTimeout(function () {
              e[t].classList.add("read"),
                t === e.length - 1 &&
                  ((l.style.display = "inline-block"),
                  (p.style.display = "block"));
            }, 5e3 * t);
          },
          o = 0;
        o < e.length;
        o++
      )
        t(o);
    },
    v = function (e) {
      e.classList.add("fade-in"),
        (e.style.opacity = "0"),
        (l.style.display = "none"),
        (p.style.display = "none");
    },
    w =
      ((t = new Date("2023-07-29T00:00").getTime()),
      (o = t + 864e5),
      (n = Date.now()) < t ? "IS_EARLY" : n > o ? "IS_LATE" : "ON_TIME");
  "IS_EARLY" === w &&
    e({
      title: "Come Back Later...",
      body: "<br />\n    <h1>Hi, you come to early</h1>\n    <br /><br /><br />\n    <p>\n        I know this page is very interesting for you, especially for your special day but.<br />\n        You need to be patience until the time has come, right ?\n    </p>",
    }),
    "IS_LATE" === w &&
      e({
        title: "See you next time...",
        body: "<br />\n    <h1>The party was over</h1>\n    <br /><br /><br />\n    <p>\n        Yes, my gift for you is kinda simple, cheap, and weird ? &#128534<br>\n        B-but. It's only for you. &#128150\n    </p>\n",
      }),
    "ON_TIME" === w &&
      ((p.innerHTML = "Click the Light Bulb."),
      k(u),
      l.addEventListener("click", function () {
        if (l.classList.contains("switch"))
          S.play(),
            v(s),
            (p.innerHTML = "Click the Door"),
            setTimeout(function () {
              l.classList.add("door-out"),
                l.classList.remove("switch"),
                (s.style.display = "none"),
                k(m);
            }, 4e3);
        else if (l.classList.contains("door-out"))
          T.play(),
            v(c),
            setTimeout(function () {
              q.play(),
                (q.loop = !0),
                l.classList.add("door-in"),
                l.classList.remove("door-out"),
                (c.style.display = "none"),
                k(y);
            }, 4e3);
        else if (l.classList.contains("door-in"))
          T.play(),
            v(a),
            (p.innerHTML = "Click the Gift"),
            setTimeout(function () {
              l.classList.add("gift"),
                l.classList.remove("door-in"),
                (a.style.display = "none"),
                k(d);
            }, 4e3);
        else if (l.classList.contains("gift")) {
          q.pause(),
            h.play(),
            (i.style.display = "none"),
            v(r),
            (g.loop = !0),
            g.play();
          var e =
            parseInt(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--readTime"
              )
            ) + 5;
          (f[1].style.display = "flex"),
            setTimeout(function () {
              f[1].classList.add("appear"),
                (f[1].style.opacity = "1"),
                b.classList.add("move-up");
            }, 1500),
            setTimeout(function () {
              (b.style.transform = "translateY(-100%)"),
                (r.style.display = "none");
            }, 5e3),
            setTimeout(function () {
              L.classList.add("fade-in"), (L.style.opacity = "0");
            }, 1e3 * e),
            setTimeout(function () {
              (f[1].style.display = "none"),
                (f[0].style.display = "flex"),
                f[0].classList.add("appear"),
                (f[0].style.opacity = "1");
            }, 1e3 * (e + 3));
        }
      }));
})();
//# sourceMappingURL=index.21caf556.js.map
