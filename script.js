document.getElementById('colaboracion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert(`Gracias, ${nombre}! He recibido tu mensaje. Te contactaré pronto.`);
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});