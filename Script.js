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