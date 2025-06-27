// Load header and footer components
function includeComponent(id, url) {
    const container = document.getElementById(id);
    if (!container) return;

    fetch(url)
        .then((response) => response.text())
        .then((html) => {
            container.innerHTML = html;
        })
        .catch((err) => {
            console.error(`Error loading ${url}:`, err);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    includeComponent('header-container', 'components/header.html');
    includeComponent('footer-container', 'components/footer.html');

});
