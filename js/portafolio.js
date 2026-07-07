
var form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var mensaje = document.getElementById('formMessage');
    mensaje.classList.remove('d-none');

    form.reset();

    setTimeout(function () {
        mensaje.classList.add('d-none');
    }, 4000);
});
