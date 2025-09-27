// Accessible nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.setAttribute('aria-hidden', String(expanded));
  });
}

// Insert current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple contact form validation
document.addEventListener('submit', (e) => {
  const form = e.target;
  if (!form.classList || !form.classList.contains('contact-form')) return;
  e.preventDefault();
  let valid = true;
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const msg = form.querySelector('[name="message"]');
  // Reset errors
  form.querySelectorAll('.error').forEach(n => n.remove());
  function showErr(el, text) {
    valid = false;
    const p = document.createElement('p');
    p.className = 'error';
    p.textContent = text;
    el.after(p);
  }
  if (!name.value.trim()) showErr(name, 'Please enter your name.');
  if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) showErr(email, 'Please enter a valid email.');
  if (!msg.value.trim()) showErr(msg, 'Message cannot be empty.');
  if (!valid) return;
  // Simulate submit — replace with fetch() to your endpoint later
  form.querySelectorAll('button, input, textarea').forEach(i => i.disabled = true);
  setTimeout(() => {
    alert('Thanks — your message was sent (demo).');
    form.reset();
    form.querySelectorAll('button, input, textarea').forEach(i => i.disabled = false);
  }, 700);
});

// Reveal elements on scroll and on load
document.addEventListener('DOMContentLoaded', function () {
  const reveals = document.querySelectorAll('.reveal');
  function revealOnScroll() {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

