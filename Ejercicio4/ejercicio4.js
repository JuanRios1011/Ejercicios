console.log("Ejercicio 4........................................")
let transporte = prompt("¿Viajas en: (coche, tren, bicicleta o autobus)? ");

transporte = transporte.toLowerCase();
if (transporte === "tren" || transporte === "autobus") {
    console.log("Recuerda llevar dinero para el ticket, buen viaje");
} else if (transporte === "coche" || transporte === "bicicleta")
    console.log("No necesitas ticket, buen viaje");
    
