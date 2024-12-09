// Mostrar y ocultar formularios
function toggleForms() {
  document.getElementById("registerForm").classList.toggle("hidden");
  document.getElementById("loginForm").classList.toggle("hidden");
}

// Registrar usuario
function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPassword").value;

  if (username && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Usuario registrado con éxito.");
    toggleForms();
  } else {
    alert("Por favor, completa todos los campos.");
  }
}

// Iniciar sesión
function login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUser && password === storedPassword) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("username", username);
    showWelcomeMessage(username);
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

// Mostrar mensaje de bienvenida
function showWelcomeMessage(username) {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("welcomeMessage").classList.remove("hidden");
  document.getElementById("username").innerText = username;
}

// Cerrar sesión
function logout() {
  sessionStorage.clear();
  document.getElementById("welcomeMessage").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

// Verificar si hay una sesión activa
document.addEventListener("DOMContentLoaded", () => {
  const loggedIn = sessionStorage.getItem("loggedIn");
  const username = sessionStorage.getItem("username");

  if (loggedIn && username) {
    showWelcomeMessage(username);
  }
});


