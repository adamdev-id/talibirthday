const e = function () {
  const e = new Date("2023-07-29T00:00").getTime(),
    t = e + 864e5,
    o = Date.now();
  return o < e ? "IS_EARLY" : o > t ? "IS_LATE" : "ON_TIME";
};
function t(e) {
  (document.title = e.title),
    (document.body.innerHTML = e.body),
    document.body.classList.add("page-404");
}
const o = {
    title: "Come Back Later...",
    body: "<br />\n    <h1>Hi, you come to early</h1>\n    <br /><br /><br />\n    <p>\n        I know this page is very interesting for you, especially for your special day but.<br />\n        You need to be patience until the time has come, right ?\n    </p>",
  },
  l = {
    title: "See you next time...",
    body: "<br />\n    <h1>The party was over</h1>\n    <br /><br /><br />\n    <p>\n        Yes, my gift for you is kinda simple, cheap, and weird ? &#128534<br>\n        B-but. It's only for you. &#128150\n    </p>\n",
  },
  s = document.querySelector(".btn"),
  n = document.querySelector(".darkroom"),
  i = document.querySelector(".giftroom"),
  a = document.querySelector(".hallway"),
  r = document.querySelector(".empty-room"),
  c = document.querySelector(".flash"),
  d = document.querySelectorAll(".bb-text"),
  u = document.querySelectorAll(".gift-text"),
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
  k = (e) => {
    for (let t = 0; t < e.length; t++)
      setTimeout(() => {
        e[t].classList.add("read"),
          t === e.length - 1 &&
            ((s.style.display = "inline-block"), (p.style.display = "block"));
      }, 5e3 * t);
  },
  w = (e) => {
    e.classList.add("fade-in"),
      (e.style.opacity = "0"),
      (s.style.display = "none"),
      (p.style.display = "none");
  };
{
  const A = e();
  "IS_EARLY" === A && t(o),
    "IS_LATE" === A && t(l),
    "ON_TIME" === A &&
      ((p.innerHTML = "Click the Light Bulb."),
      k(d),
      s.addEventListener("click", function () {
        if (s.classList.contains("switch"))
          S.play(),
            w(n),
            (p.innerHTML = "Click the Door"),
            setTimeout(function () {
              s.classList.add("door-out"),
                s.classList.remove("switch"),
                (n.style.display = "none"),
                k(m);
            }, 4e3);
        else if (s.classList.contains("door-out"))
          T.play(),
            w(r),
            setTimeout(function () {
              q.play(),
                (q.loop = !0),
                s.classList.add("door-in"),
                s.classList.remove("door-out"),
                (r.style.display = "none"),
                k(y);
            }, 4e3);
        else if (s.classList.contains("door-in"))
          T.play(),
            w(a),
            (p.innerHTML = "Click the Gift"),
            setTimeout(function () {
              s.classList.add("gift"),
                s.classList.remove("door-in"),
                (a.style.display = "none"),
                k(u);
            }, 4e3);
        else if (s.classList.contains("gift")) {
          q.pause(),
            h.play(),
            (i.style.display = "none"),
            w(c),
            (g.loop = !0),
            g.play();
          const e =
            parseInt(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--readTime"
              )
            ) + 5;
          (f[1].style.display = "flex"),
            setTimeout(() => {
              f[1].classList.add("appear"),
                (f[1].style.opacity = "1"),
                b.classList.add("move-up");
            }, 1500),
            setTimeout(() => {
              (b.style.transform = "translateY(-100%)"),
                (c.style.display = "none");
            }, 5e3),
            setTimeout(() => {
              L.classList.add("fade-in"), (L.style.opacity = "0");
            }, 1e3 * e),
            setTimeout(() => {
              (f[1].style.display = "none"),
                (f[0].style.display = "flex"),
                f[0].classList.add("appear"),
                (f[0].style.opacity = "1");
            }, 1e3 * (e + 3));
        }
      }));
}
//# sourceMappingURL=index.8f8fdb67.js.map
