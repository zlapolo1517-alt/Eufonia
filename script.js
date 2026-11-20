
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const toast = document.getElementById("toast");

// ABRIR Y CERRAR MENU

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// CERRAR MENU AL SELECCIONAR UNA SECCION

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");

        menuToggle.textContent = "☰";

    });

});

// MOSTRAR MENSAJES

function showMessage(message) {

    toast.textContent = message;

    toast.style.display = "block";

    setTimeout(() => {

        toast.style.display = "none";

    }, 3500);

}

// BOTON DEL PRODUCTO

document.getElementById("productButton").addEventListener("click", () => {

    showMessage(
        "¡Gracias por descubrir EUFONIA! Próximamente más información."
    );

});

// MENSAJE DE BIENVENIDA EN CONSOLA

console.log("EUFONIA: Sistema iniciado correctamente.");
console.log("¡Brilla de forma sostenible!");

