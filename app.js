const fs = require('fs');


const { argv } = require('./config/yargs.js')

const { leercsv, generardatos } = require('./buscador/conexion.js');

let comando = argv._[0]

switch (comando) {
    case 'mostrar':
        console.log(argv.archivo, argv.anio, argv.pais)
        leercsv(argv.archivo)
            .then(archivo => {
                generardatos(archivo, argv.anio, argv.pais).then(archivo2 => {
                    console.log(archivo2)
                }).catch((err) => console.log("error: ", err))
            }).catch((err) => console.log("error: ", err))
        break;
    case 'guardar':

        leercsv(argv.archivo)
            .then(archivo => {
                generardatos(archivo, argv.anio, argv.pais).then(archivo2 => {
                    fs.writeFile(`resultados/${argv.pais}.txt`, `${archivo2}`, error => {
                        if (error)
                            console.log(error);
                        else
                            console.log('El archivo fue creado');
                    });
                }).catch((err) => console.log("error: ", err))
            }).catch((err) => console.log("error: ", err))
        break;
    default:
        console.log('Comando no valido!')
};