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
        const script = document.createElement('script');
        script.src = 'js/header.js';
        script.onload = function () {
            if (typeof initHeader === 'function') {
                initHeader();
            }
        };
        document.body.appendChild(script);
    });
    includeComponent('footer-container', 'components/footer.html');

});
