// JavaScript for header component

// Initialize interactions for the header component
function initHeader() {
  const video = document.getElementById('headerVideo');
  if (video) {
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    if (isSmallScreen) {
      video.removeAttribute('autoplay');
      video.pause();
    }
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

// Expose initHeader globally so other scripts can trigger it
window.initHeader = initHeader;
