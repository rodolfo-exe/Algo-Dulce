document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

document
.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior:'smooth'
});

});

});

console.log("Algo Dulce cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            // Código listo por si deseas reproducir un sutil sonido o micro-interacción al pasar el mouse
            console.log("Mouse sobre red social: " + icon.getAttribute('title'));
        });
    });
});