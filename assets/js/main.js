/* ═══════════════════════════════════════════════════
   main.js — Studio72H
   Lógica principal del sitio:
   - Testimonios rotativos
   - Hamburger menu mobile
   - Animaciones GSAP + ScrollTrigger
   - Cursor custom desktop
   - Efecto magnetic en botones
   - Smooth scroll anchors

═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── TESTIMONIALS DATA ── */
  var testimonials = [
    {
      quote: '"Les mandé el logo por WhatsApp un lunes y el miércoles ya tenía mi página lista. Mis clientes ahora me encuentran en Google. Lo mejor que he invertido."',
      author: '— Restaurante en Riohacha'
    },
    {
      quote: '"No tenía ni idea de páginas web. Me lo explicaron todo simple, en dos días estaba online. Ya me llegan clientes nuevos por Google cada semana."',
      author: '— Dueño de ferretería, Bogotá'
    }
  ];
  var currentTesti = 0;

  function showTesti(idx) {
    var slot = document.getElementById('testi-slot');
    var quote = document.getElementById('testi-quote');
    var author = document.getElementById('testi-author');
    var dots = document.querySelectorAll('.testi-dot');
    slot.classList.add('out');
    setTimeout(function() {
      quote.textContent = testimonials[idx].quote;
      author.textContent = testimonials[idx].author;
      dots.forEach(function(d, i) { d.classList.toggle('active', i === idx); });
      slot.classList.remove('out');
    }, 400);
    currentTesti = idx;
  }

  document.querySelectorAll('.testi-dot').forEach(function(btn) {
    btn.addEventListener('click', function() {
      showTesti(parseInt(this.dataset.idx));
    });
  });

  // Auto-rotate testimonials
  setInterval(function() {
    showTesti((currentTesti + 1) % testimonials.length);
  }, 6000);

  /* ── HAMBURGER MENU ── */
  var burger = document.querySelector('.nav-burger');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuOpen = false;

  function openMenu() {
    menuOpen = true;
    burger.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuOpen = false;
    burger.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
  }

  if (burger && mobileMenu) {
    burger.addEventListener('click', function() {
      if (menuOpen) { closeMenu(); } else { openMenu(); }
    });
    mobileMenu.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (link) { closeMenu(); }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuOpen) { closeMenu(); }
    });
  }

  /* ── MOBILE DETECTION ── */
  var isMobile = window.matchMedia('(max-width:900px)').matches || window.matchMedia('(pointer:coarse)').matches;

  /* ── REDUCED MOTION CHECK ── */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── WAIT FOR GSAP (deferred) ── */
  window.addEventListener('load', function() {
    if (typeof gsap === 'undefined') {
      // GSAP failed to load: show everything immediately
      document.querySelector('.preloader').style.display = 'none';
      document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(function(el) {
        el.classList.add('visible');
      });
      document.querySelectorAll('.hero-h1 .line-inner').forEach(function(el) {
        el.style.transform = 'none';
      });
      document.querySelector('.hero-right').style.cssText = 'opacity:1;transform:none';
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /* ── PRELOADER (max 1s total) ── */
    if (prefersReducedMotion) {
      document.querySelector('.preloader').style.display = 'none';
      initAnimations();
      return;
    }

    var tl = gsap.timeline();
    tl.to('.preloader-text', {opacity:1, duration:.4, ease:'power2.out'})
      .to('.preloader-fill', {width:'100%', duration:.7, ease:'power2.inOut'}, '<.1')
      .to('.preloader', {yPercent:-100, duration:.6, ease:'power3.inOut', delay:.1,
        onComplete: function() {
          document.querySelector('.preloader').style.display = 'none';
          initAnimations();
        }
      });
  });

  function initAnimations() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(function(el) {
        el.classList.add('visible');
      });
      return;
    }

    /* ── HERO LINES ── */
    gsap.to('.hero-h1 .line-inner', {y:0, duration:1.2, ease:'power4.out', stagger:.12});
    if (isMobile) {
      gsap.to('.hero-right', {opacity:1, duration:.6, ease:'power2.out', delay:.4});
    } else {
      gsap.to('.hero-right', {opacity:1, x:0, duration:1, ease:'power3.out', delay:.6});
    }
    gsap.from('.hero-stat', {opacity:0, y:20, duration:.6, ease:'power2.out', stagger:.1, delay:1});

    /* ── COUNTERS ── */
    document.querySelectorAll('[data-count]').forEach(function(el) {
      var target = parseFloat(el.dataset.count);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      if (!target) { return; } // static HTML fallback already correct
      gsap.to({val:0}, {val:target, duration:1.8, delay:1.2, ease:'power2.out',
        onStart: function() { el.textContent = prefix + '0' + suffix; },
        onUpdate: function() {
          el.textContent = prefix + Math.round(this.targets()[0].val) + suffix;
        }
      });
    });

    /* ── SCROLL REVEALS ── */
    document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(function(el) {
      ScrollTrigger.create({
        trigger: el, start: 'top 85%',
        onEnter: function() { el.classList.add('visible'); },
        once: true
      });
    });

    /* ── PARALLAX (desktop only — skip on mobile to save battery) ── */
    if (!isMobile) {
      gsap.utils.toArray('.hero-line').forEach(function(line, i) {
        gsap.to(line, {y:-(50 + i*30), scrollTrigger:{trigger:'.hero', start:'top top', end:'bottom top', scrub:1}});
      });
      gsap.to('.testi-bg-text', {x:-100, scrollTrigger:{trigger:'.testimonial', start:'top bottom', end:'bottom top', scrub:1}});
      gsap.to('.about-num', {y:-60, scrollTrigger:{trigger:'.about', start:'top bottom', end:'bottom top', scrub:1}});
    }
  }

  /* ── CURSOR (pointer devices only, not tablets) ── */
  if (window.matchMedia('(pointer:fine) and (hover:hover)').matches) {
    var dot = document.querySelector('.cursor');
    var ring = document.querySelector('.cursor-ring');
    var mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function(e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
    });
    (function raf() {
      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(raf);
    })();
    document.querySelectorAll('a,button,.magnetic').forEach(function(el) {
      el.addEventListener('mouseenter', function() { ring.classList.add('hover'); });
      el.addEventListener('mouseleave', function() { ring.classList.remove('hover'); });
    });
  }

  /* ── MAGNETIC EFFECT ── */
  window.addEventListener('load', function() {
    if (typeof gsap === 'undefined') return;
    document.querySelectorAll('.magnetic').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, {x: x*.25, y: y*.25, duration:.3, ease:'power2.out'});
      });
      btn.addEventListener('mouseleave', function() {
        gsap.to(btn, {x:0, y:0, duration:.5, ease:'elastic.out(1,.5)'});
      });
    });
  });

  /* ── SMOOTH ANCHORS ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });

})();
