let opt = {
    archivo: {
        demand: true,
        alias: `f`,
        description: `La ruta del archivo csv`
    },
    pais: {
        alias: `c`,
        description: 'Permite determinar el país a analizar a través de su código',
        default: 'ECU'
    },
    anio: {
        alias: `y`,
        default: 1960,
        description: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }
}

let optg = {
    archivo: {
        demand: true,
        alias: `f`,
        description: `La ruta del archivo csv`
    },
    pais: {
        alias: `c`,
        description: 'Permite determinar el país a analizar a través de su código',
        default: 'ECU'
    },
    anio: {
        alias: `y`,
        default: 1960,
        description: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }
}

const argv = require('yargs')
    .command('mostrar', 'Crea un archivo co la tabla de multiplicar', opt)
    .command('guardar', 'Guarda los datos de los paises', optg)
    .help()
    .argv;


module.exports = {
    argv
};