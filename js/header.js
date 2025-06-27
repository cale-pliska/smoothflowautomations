// JavaScript for header component

// Initialize interactions for the header component
function initHeader() {
  const video = document.getElementById('headerVideo');
  if (video) {
    video.addEventListener('ended', function () {
      video.pause();
      video.currentTime = video.duration; // freeze on last frame
    });
  }

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }
}

// Auto-run if script loads after the DOM is ready
if (document.readyState !== 'loading') {
  initHeader();
} else {
  document.addEventListener('DOMContentLoaded', initHeader);
}
