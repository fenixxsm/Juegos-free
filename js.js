// Función para guardar la imagen en localStorage
function saveImage() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            localStorage.setItem('sharedImage', imageData); // Guardar imagen en localStorage
            alert('Imagen guardada correctamente.');
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor selecciona una imagen.');
    }
}

// Función para mostrar la imagen desde localStorage
function displayImage() {
    const sharedImage = localStorage.getItem('sharedImage');
    const imgElement = document.getElementById('display-image');

    if (sharedImage) {
        imgElement.src = sharedImage; // Asignar imagen al atributo src
    } else {
        imgElement.alt = 'No se encontró ninguna imagen guardada.';
    }
}

// Si estamos en la página de subir imagen, asignamos el evento
if (document.getElementById('save-image-btn')) {
    document.getElementById('save-image-btn').addEventListener('click', saveImage);
}

// Si estamos en la página de mostrar imagen, mostramos la imagen
if (document.getElementById('display-image')) {
    displayImage();
}
