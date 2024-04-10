console.log("Ejercicio 5")
const tiempo = parseFloat(process.argv[2])
const kilometros = parseFloat(process.argv[3])

const conductor = tiempo / kilometros
    if (conductor >=40 && conductor<=60){
        console.log("conductor calificado")
    }else{
        console.log("conductor descalificado")
    } 


