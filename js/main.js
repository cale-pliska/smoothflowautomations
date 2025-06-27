// Simple form handler
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out, ' + form.name.value + '!');
    form.reset();
});
