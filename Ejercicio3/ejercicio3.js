console.log("Ejercicio 3")
const numero1 = parseFloat(process.argv[2])
const numero2 = parseFloat(process.argv[3])

    if (numero1 > numero2){
        res = numero1 - numero2
        console.log(`el resultado de la resta es ${res}`)
    }else{
        res = numero2 - numero1
        console.log(`el resultado de la resta es ${res}`)
    }


    


