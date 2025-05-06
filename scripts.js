// Script básico para futuras funcionalidades
console.log("El Código de la Verdad - Script cargado");


// Ejemplo: Activar la clase "active" dinámicamente (opcional, puedes implementarlo)
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
