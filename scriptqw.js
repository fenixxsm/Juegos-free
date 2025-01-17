const asideMenu = document.querySelector('.aside-menu');
const asideMenu2 = document.querySelector('#aside2');
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenu2 = document.querySelector('.toggle-menu2');

toggleMenu.addEventListener('click', () => {
  asideMenu.classList.toggle('desplegar');
});

toggleMenu2.addEventListener('click', () => {
  asideMenu2.classList.toggle('desplegar2');
});

function logout() {
  // Agrega aquí la lógica para cerrar sesión
  console.log('Cerrando sesión...');
}