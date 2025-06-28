// Load header and footer components
function includeComponent(id, url, callback) {
    const container = document.getElementById(id);
    if (!container) return;

    fetch(url)
        .then((response) => response.text())
        .then((html) => {
            container.innerHTML = html;
            if (typeof callback === 'function') {
                callback(container);
            }
        })
        .catch((err) => {
            console.error(`Error loading ${url}:`, err);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    includeComponent('header-container', 'components/header.html', function () {
        if (typeof initHeader === 'function') {
            initHeader();
        }
    });
    includeComponent('footer-container', 'components/footer.html');

    // Trigger SVG animations when they enter the viewport
    function observeVisibility(element, className) {
        if (!element) return;
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(element);
    }

    observeVisibility(document.querySelector('.yin-yang-icon'), 'animate-yin-yang');
    observeVisibility(document.querySelector('.circle-bg'), 'animate-circle');
});
