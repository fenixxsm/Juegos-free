 // Cargar los colores guardados al cargar la página
 window.onload = function() {
  
    const savedBackground = localStorage.getItem('backgroundColor');
    const savedText = localStorage.getItem('textColor');

    if (savedBackground) {
        document.body.style.backgroundColor = savedBackground;
        document.getElementById('backgroundSelector').value = savedBackground;
    }

    if (savedText) {
        document.body.style.color = savedText;
        document.getElementById('textSelector').value = savedText;
    }
};

function changeColors() {
    const backgroundValue = document.getElementById('backgroundSelector').value;
    const textValue = document.getElementById('textSelector').value;

    // Cambiar el color de fondo según la opción seleccionada
    document.body.style.backgroundColor = backgroundValue;

    // Cambiar el color del texto según la opción seleccionada
    document.body.style.color = textValue;

    // Guardar los colores seleccionados en localStorage
    localStorage.setItem('backgroundColor', backgroundValue);
    localStorage.setItem('textColor', textValue);
}
// Guardar el diccionario en localStorage si no está almacenado
const diccionarioPorDefecto = {
    "version": "   Beta 1.0.6.2",
};

if (!localStorage.getItem('diccionarioIds')) {
    localStorage.setItem('diccionarioIds', JSON.stringify(diccionarioPorDefecto));
    console.log('Diccionario inicial guardado en localStorage.');
}

// Función para reemplazar los IDs
function reemplazarIds() {
    // Obtener el diccionario desde localStorage
    const diccionarioIds = JSON.parse(localStorage.getItem('diccionarioIds')) || {};

    // Obtener todos los elementos con la clase "id"
    const elementos = document.querySelectorAll('.id');

    // Recorrer todos los elementos y reemplazar el texto
    elementos.forEach(elemento => {
        const id = elemento.innerText.trim(); // Obtener el valor del ID
        if (diccionarioIds[id]) {
            elemento.innerText = diccionarioIds[id]; // Reemplazar el texto por el valor del ID
        }
    });
}

// Ejecutar la función después de que el DOM haya sido completamente cargado
document.addEventListener('DOMContentLoaded', reemplazarIds);

// Función para actualizar el diccionario en localStorage
function actualizarDiccionario(nuevoDiccionario) {
    localStorage.setItem('diccionarioIds', JSON.stringify(nuevoDiccionario));
    console.log('Diccionario actualizado en localStorage.');
}

// Ejemplo: Actualizar el diccionario
const nuevoDiccionario = {
    "version": "   Beta 1.0.6.2",
};
actualizarDiccionario(nuevoDiccionario);

