document.getElementById('siguiente').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const mensajeDiv = document.getElementById('mensaje');
    const mensaje = `¡Feliz cumpleaños, ${nombre}! espero pase un buen dia....... y que nada borre esa sonrisa.`;
    
    if (nombre.trim() !== '') { // Verifica que no esté vacío
        mensajeDiv.classList.remove('hidden');
        mensajeDiv.classList.add('visible');
        mensajeDiv.innerHTML = ''; // Limpiar el contenido previo
        mostrarMensaje(mensaje, mensajeDiv);
        document.getElementById('nombre').value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
});

function mostrarMensaje(mensaje, elemento) {
    let i = 0;
    elemento.style.opacity = 1; // Asegúrate de que el mensaje sea visible
    function escribir() {
        if (i < mensaje.length) {
            elemento.innerHTML += mensaje.charAt(i);
            i++;
            setTimeout(escribir, 100);
        }
    }
    escribir();
}
