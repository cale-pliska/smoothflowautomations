// JavaScript for header component

// Initialize interactions for the header component
function initHeader() {

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }
}

// Expose initHeader globally so other scripts can trigger it
window.initHeader = initHeader;
