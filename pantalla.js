const button = document.getElementById('fullscreenButton');

button.addEventListener('click', () => {
    const element = document.documentElement; // Obtener el elemento raíz del documento
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Soporte para Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Soporte para Chrome, Safari y Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Soporte para Internet Explorer/Edge
        element.msRequestFullscreen();
    }
});