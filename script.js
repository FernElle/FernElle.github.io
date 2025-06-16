console.log("Script is running!");

// === Light/Dark Mode Toggle ===
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = '🌙';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.innerText = '☀️';
  }
  localStorage.setItem('theme', theme);
}

// Only apply if the toggle exists (safety on other pages)
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme') || 'light';
    applyTheme(saved);
  });
}

// === Hamburger Menu Toggle ===
const hamburgerToggle = document.getElementById('hamburger-toggle');
const dropdownNav = document.getElementById('dropdown-nav');

if (hamburgerToggle && dropdownNav) {
  hamburgerToggle.addEventListener('click', () => {
    const isOpen = dropdownNav.style.display === 'flex';
    dropdownNav.style.display = isOpen ? 'none' : 'flex';
  });
}

// === Reveal on Scroll ===
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === Button Hover Animation ===
document.querySelectorAll('button, .btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('btn-glow');
  });
  button.addEventListener('mouseout', () => {
    button.classList.remove('btn-glow');
  });
});
