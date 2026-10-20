// 1. VARIABLE GLOBAL
// Creamos una variable para llevar la cuenta de cuántos productos se han agregado.
let cantidadCarrito = 0;

// 2. FUNCIÓN PARA AGREGAR AL CARRITO
// Esta función se ejecuta cada vez que el usuario hace clic en el botón "Comprar".
function agregarAlCarrito(nombreProducto) {
    // Incrementamos el contador en 1
    cantidadCarrito++;

    // Mostramos un mensaje emergente (alerta) con el nombre del producto
    alert(`¡Has agregado "${nombreProducto}" con éxito!`);

    // Opcional: Imprimimos en la consola del navegador para control interno
    console.log(`Total de productos en el carrito: ${cantidadCarrito}`);
}
// Función para mostrar la ventana de login
function abrirLogin() {
    document.getElementById('modal-login').style.display = 'flex';
}

// Función para ocultar la ventana de login
function cerrarLogin() {
    document.getElementById('modal-login').style.display = 'none';
}

// Función para simular el inicio de sesión
function procesarLogin(event) {
    event.preventDefault(); // Evita que la página se recargue
    const correo = document.getElementById('correo').value;
    alert(`¡Bienvenido de nuevo, ${correo}! Has iniciado sesión correctamente.`);
    cerrarLogin();
}