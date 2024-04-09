console.log("..............................Ejercicio 10................................................")
let rentaAnual = prompt("¿ Cual es el valor de tu renta anual en euros ?");
if (rentaAnual < 10000){
    console.log("El tipo impositivo que te corresponde es 5%");
} else if (rentaAnual >= 10000 && rentaAnual < 20000){
    console.log("El tipo impositivo que te corresponde es 15%");
} else if (rentaAnual >= 20000 && rentaAnual < 35000){
    console.log("El tipo impositivo que te corresponde es 20%");
} else if (rentaAnual >= 35000 && rentaAnual <= 60000){
    console.log("El tipo impositivo que te corresponde es 30%");
} else if (rentaAnual > 60000){
    console.log("El tipo impositivo que te corresponde es 45%");
}
    