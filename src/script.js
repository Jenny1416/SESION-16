// Función para mostrar mensaje de bienvenida al hacer clic en el botón
document.getElementById("welcomeBtn").addEventListener("click", function() {
    alert("¡Bienvenido a mi página web!");
});

// Validación del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Por favor, rellena todos los campos.");
        event.preventDefault(); // Previene el envío del formulario
    } else {
        alert("Formulario enviado con éxito.");
    }
});
