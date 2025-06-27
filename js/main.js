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

});
