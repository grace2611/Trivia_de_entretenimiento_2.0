document.addEventListener('DOMContentLoaded', function() {
    const nombre = localStorage.getItem('nombre');
    const saludoElement = document.getElementById('saludo');
  
    if (nombre) {
      saludoElement.innerText = `Bienvenido(a) ${nombre}!`;
    } else {
      saludoElement.innerText = 'Bienvenido(a)!';
    }
  });
  
  function guardarNombre() {
    const nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre);
    window.location.href = 'segundo.html'; 
  }
  
