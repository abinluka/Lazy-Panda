/* =============================================
   LAZY PANDA PHOTOGRAPHY — SHARED JAVASCRIPT
   ============================================= */

// ========== LOADER ==========
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  let count = 0;
  const pct = document.getElementById('loaderPct');
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 15) + 5;
    if (count >= 100) { count = 100; clearInterval(interval); }
    if (pct) pct.textContent = count + '%';
    if (count === 100) setTimeout(() => loader.classList.add('hidden'), 350);
  }, 70);
});

// ========== CUSTOM CURSOR ==========
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
if (cursor && follower) {
  let mx = 0, my = 0, fx = 0, fy = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 4 + 'px';
    cursor.style.top  = my - 4 + 'px';
  });
  (function animate() {
    fx += (mx - fx - 18) * 0.12;
    fy += (my - fy - 18) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animate);
  })();
  document.querySelectorAll('a, button, .hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
  });
}

// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    if (backTop) backTop.classList.toggle('show', window.scrollY > 400);
  });
}

// ========== MOBILE MENU ==========
window.toggleMobile = function() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
};
window.closeMobile = function() {
  document.getElementById('mobileMenu')?.classList.remove('open');
};

// ========== BACK TO TOP ==========
window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ========== PARTICLES ==========
(function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  class P {
    constructor() { this.r(); }
    r() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.s = Math.random() * 1.2 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.18;
      this.vy = (Math.random() - 0.5) * 0.18;
      this.o = Math.random() * 0.3 + 0.05;
      this.g = Math.random() > 0.7;
    }
    u() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.r();
    }
    d() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
      ctx.fillStyle = this.g ? `rgba(201,168,76,${this.o})` : `rgba(245,240,235,${this.o * 0.3})`;
      ctx.fill();
    }
  }
  const ps = Array.from({ length: 80 }, () => new P());
  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ps.forEach(p => { p.u(); p.d(); });
    requestAnimationFrame(loop);
  })();
})();

// ========== COUNTER ANIMATION ==========
document.querySelectorAll('.counter').forEach(el => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const target = +el.dataset.target;
      let count = 0;
      const inc = Math.ceil(target / 80);
      const t = setInterval(() => {
        count = Math.min(count + inc, target);
        el.textContent = count + '+';
        if (count >= target) clearInterval(t);
      }, 25);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  io.observe(el);
});

// ========== FAQ ACCORDION ==========
window.toggleFaq = function(el) {
  const ans = el.nextElementSibling;
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-question.open').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.style.maxHeight = null;
  });
  if (!isOpen) {
    el.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
};

// ========== LIGHTBOX ==========
window.openLightbox = function(title, cat) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  if (title) lb.querySelector('.lb-title').textContent = title;
  if (cat) lb.querySelector('.lb-cat').textContent = cat;
  lb.classList.add('open');
};
window.closeLightbox = function(e) {
  const lb = document.getElementById('lightbox');
  if (!e || e.target === lb || e.currentTarget.tagName === 'BUTTON') lb.classList.remove('open');
};

// ========== ACTIVE NAV LINK ==========
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu .nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === './') || href === path) {
      a.classList.add('active');
    }
  });
})();
