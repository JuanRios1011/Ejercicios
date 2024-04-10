console.log("Ejercicio 1")
const numero = parseFloat(process.argv[2])
function par_o_impar(numero){
    if(numero % 2 == 0){
        console.log(`el numero ${numero} es par`)
    } else {
        console.log(`el numero ${numero} es impar`)
    }
}
par_o_impar(numero)
