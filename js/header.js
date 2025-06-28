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
  const circle = document.getElementById('nav-circle');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
      if (circle) {
        circle.style.visibility = 'hidden';
      }
    });
  }
}

// Expose initHeader globally so other scripts can trigger it
window.initHeader = initHeader;
