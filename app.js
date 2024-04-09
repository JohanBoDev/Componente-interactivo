let boton1 = document.getElementById('b_1');
let boton2 = document.getElementById('b_2');
let boton3 = document.getElementById('b_3');
let boton4 = document.getElementById('b_4');
let boton5 = document.getElementById('b_5');
let boton_enviar = document.getElementById('enviar');
let numero = document.getElementById('numero_seleccionado');
let modal = document.getElementById('modal');

// Evento clic para el botón de enviar
let botonSeleccionado = null; // Variable para almacenar el botón seleccionado

// Evento clic para los botones del 1 al 5
boton1.addEventListener('click', function() {
    botonSeleccionado = '1';
});

boton2.addEventListener('click', function() {
    botonSeleccionado = '2';
});

boton3.addEventListener('click', function() {
    botonSeleccionado = '3';
});

boton4.addEventListener('click', function() {
    botonSeleccionado = '4';
});

boton5.addEventListener('click', function() {
    botonSeleccionado = '5';
});


// Evento clic para el botón de enviar
boton_enviar.addEventListener('click', function() {

    if (botonSeleccionado === null) {
        alert('Debes seleccionar un número antes de enviar');
        return;
    }
    // Muestra el modal
    modal.style.display = 'flex';
    // Actualiza el innerText del elemento "numero_seleccionado" con el valor del botón seleccionado
    numero.innerText = botonSeleccionado;
});

