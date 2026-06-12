/* ============================================================
   SOLXEN TECH, shared chrome + interactions
   ============================================================ */
(function () {
  "use strict";

  function brandHTML(forDark) {
    return '<a href="index.html" class="brand">' +
      '<img src="logo-original.png" alt="SolXen Tech, Partners in Reliability" class="brand-logo"/>' +
      '</a>';
  }

  /* ---- nav model ---- */
  var SOLUTIONS = [
    ["Life Cycle Inspections", "solutions.html#inspections", "NEW", "inspect", "Standards-driven asset inspection"],
    ["Drone Inspections", "solutions.html#drone", "NEW", "drone", "UAV thermal, visual & corona"],
    ["Asset Risk Management", "solutions.html#risk", "NEW", "risk", "Risk-based maintenance planning"],
    ["Corrosion Prevention", "solutions.html#corrosion", "NEW", "corrosion", "CP systems & coating surveys"],
    ["Grid Digitalization", "solutions.html#grid", "NEW", "grid", "Digital twins & hosting capacity"],
    ["Power Electronics", "solutions.html#power", "", "power", "Converter, drive & power-stack"],
    ["Industrial Electronics", "solutions.html#industrial-el", "", "chip", "PCB diagnostics & obsolescence"],
    ["Diagnostics & Reliability", "solutions.html#diagnostics", "", "pulse", "Thermal, ESA, PQ & vibration"],
    ["Lifecycle Engineering", "solutions.html#lifecycle-eng", "", "cycle", "Condition assessment & TCO"],
    ["Renewable & BESS", "solutions.html#renewable", "", "sun", "Inverter, string & PCS support"],
    ["Utility & Industrial", "solutions.html#utility", "", "house", "Substation & field services"]
  ];
  var ICONS = {
    inspect:'<circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/>',
    drone:'<path d="M12 2l8 10-8 10-8-10z"/><circle cx="12" cy="12" r="3"/>',
    risk:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>',
    corrosion:'<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 10h16M10 4v16"/>',
    grid:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>',
    power:'<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M7 10v4M12 10v4M17 10v4"/>',
    chip:'<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
    pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    cycle:'<path d="M21 12a9 9 0 1 1-9-9"/><path d="M12 7v5l3 2"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
    house:'<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-8h6v8"/>'
  };
  var NAV = [
    ["solutions", "Solutions", "solutions.html"],
    ["industries", "Industries", "industries.html"],
    ["regional", "Regional", "regional.html"],
    ["lifecycle", "Lifecycle", "lifecycle.html"],
    ["technology", "Technology", "technology.html"],
    ["resources", "Resources", "resources.html"],
    ["about", "About", "about.html"]
  ];

  var active = document.body.getAttribute("data-page") || "";

  /* ---- build nav ---- */
  function buildNav() {
    var links = NAV.map(function (n) {
      var cls = n[0] === active ? " class=\"active\"" : "";
      if (n[0] === "solutions") {
        var items = SOLUTIONS.map(function (s) {
          return '<a class="mega-item" href="' + s[1] + '">' +
            '<span class="mega-ic"><svg viewBox="0 0 24 24">' + (ICONS[s[3]] || '') + '</svg></span>' +
            '<span class="mega-tx"><b>' + s[0] + (s[2] ? ' <span class="badge-new">' + s[2] + '</span>' : '') + '</b>' +
            '<small>' + (s[4] || '') + '</small></span></a>';
        }).join('');
        return '<li class="has-drop"><a href="' + n[2] + '"' + cls + '>' + n[1] + '</a>' +
          '<div class="drop mega">' +
            '<div class="drop-h">11 Service Families</div>' +
            '<div class="mega-grid">' + items + '</div>' +
            '<a class="mega-feature" href="solutions.html">' +
              '<span class="mega-feat-tx"><b>Explore all capabilities</b><small>Inspection, diagnostics, corrosion, BESS &amp; more</small></span>' +
              '<span class="mega-feat-cta">View all 11 <span class="arr">&rarr;</span></span>' +
            '</a>' +
          '</div></li>';
      }
      return '<li><a href="' + n[2] + '"' + cls + '>' + n[1] + '</a></li>';
    }).join('');

    return '<nav class="site-nav" id="siteNav"><div class="nav-in">' +
      brandHTML() +
      '<ul class="nav-links">' + links +
      '<li class="nav-cta"><a href="contact.html" class="btn btn-primary">Consultation</a></li></ul>' +
      '<button class="menu-btn" id="menuBtn" aria-label="Open menu"><span></span></button>' +
      '</div></nav>';
  }

  /* ---- drawer ---- */
  function buildDrawer() {
    var main = NAV.map(function (n) {
      return '<a href="' + n[2] + '"' + (n[0] === active ? ' style="color:#fff"' : '') + '>' + n[1] + '</a>';
    }).join('');
    main = '<a href="index.html">Home</a>' + main + '<a href="careers.html">Careers</a>';
    var svc = SOLUTIONS.map(function (s) {
      return '<a href="' + s[1] + '">' + s[0] + (s[2] ? ' <span class="badge-new">' + s[2] + '</span>' : '') + '</a>';
    }).join('');
    return '<div class="scrim" id="scrim"></div><aside class="drawer" id="drawer">' +
      '<div class="drawer-top">' + brandHTML() + '<button class="drawer-x" id="drawerX" aria-label="Close">&times;</button></div>' +
      '<div class="drawer-lbl">Navigate</div>' + main +
      '<div class="drawer-lbl">Service Families</div>' + svc +
      '<a href="contact.html" class="d-cta">Request Consultation &rarr;</a>' +
      '</aside>';
  }

  /* ---- footer ---- */
  function buildFooter() {
    return '<footer class="site-foot"><div class="wrap">' +
      '<div class="foot-cta" data-reveal><div><div class="kicker">Start a conversation</div>' +
      '<h2>A critical asset that needs an engineering eye?</h2></div>' +
      '<a href="contact.html" class="btn btn-primary btn-lg">Request Consultation <span class="arr">&rarr;</span></a></div>' +
      '<div class="foot-grid">' +
      '<div class="foot-brand">' + brandHTML() +
      '<p>Localized engineering and lifecycle support for utilities, renewable operators, and industrial infrastructure across the Middle East and Central Asia, backed by specialist German engineering depth.</p></div>' +
      footCol("Solutions", [["Life Cycle Inspections","solutions.html#inspections"],["Drone Inspections","solutions.html#drone"],["Asset Risk Management","solutions.html#risk"],["Grid Digitalization","solutions.html#grid"],["Power Electronics","solutions.html#power"],["All 11 Services","solutions.html"]]) +
      footCol("Industries", [["Utilities","industries.html#utilities"],["Renewable Energy","industries.html#renewable"],["Oil & Gas","industries.html#oil-gas"],["Water","industries.html#water"],["Industrial","industries.html#industrial"],["Critical Infra","industries.html#critical"]]) +
      footCol("Company", [["About","about.html"],["Regional Ops","regional.html"],["Technology","technology.html"],["Resources","resources.html"],["Careers","careers.html"],["Contact","contact.html"]]) +
      '<div class="foot-col"><h5>Contact</h5><ul>' +
      '<li><a href="mailto:info@solxentech.com">info@solxentech.com</a></li>' +
      '<li>solxentech.com</li><li>Dubai, UAE (HQ)</li></ul></div>' +
      '</div>' +
      '<div class="foot-bot"><div>&copy; ' + new Date().getFullYear() + ' SolXen Tech, Partners in Reliability.</div>' +
      '<div class="legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">LinkedIn</a></div></div>' +
      '</div></footer>';
  }
  function footCol(title, items) {
    return '<div class="foot-col"><h5>' + title + '</h5><ul>' +
      items.map(function (i) { return '<li><a href="' + i[1] + '">' + i[0] + '</a></li>'; }).join('') +
      '</ul></div>';
  }

  /* ---- inject ---- */
  var navRoot = document.getElementById("site-nav");
  var footRoot = document.getElementById("site-footer");
  if (navRoot) navRoot.innerHTML = buildNav() + buildDrawer();
  if (footRoot) footRoot.innerHTML = buildFooter();

  /* ---- nav scroll state ---- */
  var nav = document.getElementById("siteNav");
  // pages with a dark hero need a light nav until the user scrolls
  if (nav && document.querySelector("header.phero")) nav.classList.add("on-dark");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 24); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- drawer toggle ---- */
  var drawer = document.getElementById("drawer"), scrim = document.getElementById("scrim");
  function openD() { drawer && drawer.classList.add("on"); scrim && scrim.classList.add("on"); document.body.style.overflow = "hidden"; }
  function closeD() { drawer && drawer.classList.remove("on"); scrim && scrim.classList.remove("on"); document.body.style.overflow = ""; }
  var mb = document.getElementById("menuBtn"); if (mb) mb.addEventListener("click", openD);
  var dx = document.getElementById("drawerX"); if (dx) dx.addEventListener("click", closeD);
  if (scrim) scrim.addEventListener("click", closeD);
  if (drawer) drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeD); });

  /* ---- scroll reveal w/ stagger ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  function tagReveals() {
    document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
    // auto-stagger groups
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      var kids = group.children, i;
      for (i = 0; i < kids.length; i++) {
        if (!kids[i].hasAttribute("data-reveal")) kids[i].setAttribute("data-reveal", "");
        kids[i].style.transitionDelay = (i * 80) + "ms";
        io.observe(kids[i]);
      }
    });
  }
  tagReveals();

  /* ---- counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = (el.getAttribute("data-count").indexOf(".") > -1) ? 1 : 0;
    var dur = 1500, start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick); else el.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(tick);
  }
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(function (el) { cio.observe(el); });

  /* ---- marquee: duplicate track for seamless loop ---- */
  document.querySelectorAll(".marquee-track").forEach(function (t) {
    t.innerHTML = t.innerHTML + t.innerHTML;
  });

  /* ---- tilt cards ---- */
  if (!window.matchMedia("(hover:none)").matches) {
    document.querySelectorAll(".tilt").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(900px) rotateY(" + (px * 7) + "deg) rotateX(" + (-py * 7) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
    /* ---- hero parallax ---- */
    var art = document.querySelector("[data-parallax]");
    if (art) {
      window.addEventListener("mousemove", function (e) {
        var x = (e.clientX / window.innerWidth - 0.5);
        var y = (e.clientY / window.innerHeight - 0.5);
        art.style.transform = "translate(" + (x * 14) + "px," + (y * 14) + "px)";
      });
    }
  }

  /* ---- contact form (demo) ---- */
  var form = document.getElementById("inquiryForm");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = form.querySelector("[type=submit]");
    if (btn) { btn.textContent = "Inquiry logged ✓"; btn.style.background = "var(--ink)"; }
    setTimeout(function () { form.reset(); if (btn) { btn.innerHTML = 'Send Engineering Inquiry <span class="arr">&rarr;</span>'; btn.style.background = ""; } }, 2600);
  });
})();
