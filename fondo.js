// Cargar los colores guardados al cargar la página
window.onload = function() {
    // Colores
    const savedBackground = localStorage.getItem('backgroundColor');
    const savedText = localStorage.getItem('textColor');
    const savedSvg = localStorage.getItem('svgColor');

    if (savedBackground && savedText && savedSvg) {
        document.body.style.backgroundColor = savedBackground;
        document.body.style.color = savedText;
        document.getElementById('exampleSvg').querySelector('circle').setAttribute('fill', savedSvg);

        document.getElementById('backgroundSelector').value = savedBackground;
        document.getElementById('textSelector').value = savedText;
        document.getElementById('svgSelector').value = savedSvg;
    } else {
        // Aplicar primera opción predefinida por defecto
        document.getElementById('presetColors').value = "background-#ff0000-text-#ffffff-svg-#ff0000";
        applyPresetColor();
    }

    // Imagen
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
        displayImage(savedImage);
    }

    // Reemplazar los IDs con el diccionario de localStorage
    reemplazarIds();
};

// Diccionario de IDs por defecto
const diccionarioPorDefecto = {
    "version": "Beta 1.0.9",
};

// Verificar si el diccionario está guardado en localStorage, sino guardarlo
if (!localStorage.getItem('diccionarioIds')) {
    localStorage.setItem('diccionarioIds', JSON.stringify(diccionarioPorDefecto));
    console.log('Diccionario inicial guardado en localStorage.');
}

function reemplazarIds() {
    const diccionarioIds = JSON.parse(localStorage.getItem('diccionarioIds')) || {};
    const elementos = document.querySelectorAll('.id');

    elementos.forEach(elemento => {
        const id = elemento.innerText.trim();
        if (diccionarioIds[id]) {
            elemento.innerText = diccionarioIds[id];
        }
    });
}

function actualizarDiccionario(nuevoDiccionario) {
    localStorage.setItem('diccionarioIds', JSON.stringify(nuevoDiccionario));
    console.log('Diccionario actualizado en localStorage.');
}

const nuevoDiccionario = {
    "version": "Beta 1.0.9",
};
actualizarDiccionario(nuevoDiccionario);

// Funciones para cambiar colores
function changeColors() {
    const backgroundValue = document.getElementById('backgroundSelector').value;
    const textValue = document.getElementById('textSelector').value;
    const svgValue = document.getElementById('svgSelector').value;

    // Cambiar el color de fondo según la opción seleccionada
    document.body.style.backgroundColor = backgroundValue;

    // Cambiar el color del texto según la opción seleccionada
    document.body.style.color = textValue;

    // Cambiar el color del SVG según la opción seleccionada
    document.getElementById('exampleSvg').querySelector('circle').setAttribute('fill', svgValue);

    // Guardar los colores seleccionados en localStorage
    localStorage.setItem('backgroundColor', backgroundValue);
    localStorage.setItem('textColor', textValue);
    localStorage.setItem('svgColor', svgValue);
}

function applyPresetColor() {
    const presetColor = document.getElementById('presetColors').value;
    if (presetColor) {
        const [backgroundKey, backgroundValue, textKey, textValue, svgKey, svgValue] = presetColor.split('-');
        if (backgroundKey === 'background' && textKey === 'text' && svgKey === 'svg') {
            document.body.style.backgroundColor = backgroundValue;
            document.body.style.color = textValue;
            document.getElementById('exampleSvg').querySelector('circle').setAttribute('fill', svgValue);

            document.getElementById('backgroundSelector').value = backgroundValue;
            document.getElementById('textSelector').value = textValue;
            document.getElementById('svgSelector').value = svgValue;

            // Guardar los colores predefinidos
            localStorage.setItem('backgroundColor', backgroundValue);
            localStorage.setItem('textColor', textValue);
            localStorage.setItem('svgColor', svgValue);
        }
    }
}

// Manejar la subida de la imagen
document.getElementById('imageUploader').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageData = e.target.result;

            // Guardar la imagen en localStorage
            localStorage.setItem('uploadedImage', imageData);

            // Mostrar la imagen
            displayImage(imageData);
        };

        reader.readAsDataURL(file);
    }
});

function displayImage(imageData) {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = `<img src="${imageData}" alt="Imagen subida" style="max-width: 100%; height: auto;">`;
}
