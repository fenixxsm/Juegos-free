// Recuperar la imagen de localStorage
const sharedImage = localStorage.getItem('sharedImage');
const imageElement = document.getElementById('shared-image');

if (sharedImage) {
    imageElement.src = sharedImage; // Mostrar la imagen en el <img>
} else {
    imageElement.alt = 'No se encontró ninguna imagen guardada.';
}
