import './style.css';

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const header = document.querySelector('[data-header]');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  nav?.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menu');
    nav?.classList.remove('is-open');
  });
});

document.querySelectorAll('.founder-top').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.founder-card');
    const isOpen = card.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
