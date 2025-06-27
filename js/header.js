// JavaScript for header component

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('headerVideo');
  if (video) {
    video.addEventListener('ended', function () {
      video.pause();
      video.currentTime = video.duration;
    });
  }

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }
});
