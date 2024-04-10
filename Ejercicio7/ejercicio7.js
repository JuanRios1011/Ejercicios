console.log("Ejercicio 7");
const nota1 = parseFloat(process.argv[2])
const nota2 = parseFloat(process.argv[3])
const nota3 = parseFloat(process.argv[4])

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("Por favor, proporcione números válidos como argumentos.");
} else {
    const suma = nota1 + nota2 + nota3;
    console.log(`Suma de nota = ${suma}`);
    const promedio = suma / 3;
    if (promedio < 5) {
        console.log(`Estudiante Reprobado = ${promedio}`);
    } else if (promedio > 5 && promedio <= 6) {
        console.log(`Estudiante Aprobado = ${promedio}`);
    } else if (promedio >= 7) {
        console.log(`Estudiante Notable = ${promedio}`);
    } else {
        console.log("No se pudo determinar el resultado.");
    }
}