console.log("Ejercicio6..........................................")
let numeroArticulos = prompt("Ingrese el número de artículos:");
let precioArticulo = prompt("Ingrese el precio de cada artículo en euros:");

let cantidadArticulos = parseInt(numeroArticulos);
let precioUnitario = parseFloat(precioArticulo);

let sinDescuento = cantidadArticulos * precioUnitario;
if (cantidadArticulos > 10 && precioUnitario > 40) {
    let descuento = sinDescuento * 0.15;
    let conDescuento = sinDescuento - descuento;
    console.log("Cantidad a pagar con descuento del 15%:", conDescuento, "euros");
} else {
    console.log("Cantidad a pagar sin descuento:", sinDescuento, "euros");
}