const readline = require('readline');

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfaz.question('¿Escribe tu nombre? ', (nombre) => {
    interfaz.question('¿Eres hombre o mujer? : ', (sexo) => {
        nombre = nombre.toLowerCase();

        function determinarGrupo(nombre, sexo) {
            if ((sexo === 'mujer' && nombre < 'm') || (sexo === 'hombre' && nombre > 'n')) {
                return 'Grupo A';
            } else {
                return 'Grupo B';
            }
        }

        let grupo = determinarGrupo(nombre, sexo);
        console.log("Tu grupo es el: " + grupo);

        interfaz.close();
    });
});
