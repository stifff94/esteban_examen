const fs = require('fs');

let leercsv = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function(err, data) {
            console.log("llego aqui 2")
            if (err) {
                reject(err);
            } else {
                dataArray2 = data.split(/\r?\n/)
                resolve(dataArray2);
            }
        });
    });
};
let generardatos = (datos, año, pais) => {
    return new Promise((resolve, reject) => {

        var dist = datos[4].split(",")

        var pos1 = 0
        for (var i = 4; i < dist.length - 1; i++) {

            if (parseInt(dist[i].substring(1, 7), 10) == año) {

                var pos1 = i
            }
        }
        limite = 33
        let data = '';
        for (var i = 5; i < datos.length; i++) {
            try {

                var datos2 = datos[i].split(",")

                var datos3 = datos2[1].substring(1, 4)

                if (datos3 == pais) {

                    limit2 = datos2[pos1].length - 2
                    var numero = datos2[pos1].substring(2, limit2)
                    data += "Nombre pais:\t" + datos2[0].substring(1, 8) + "\n";
                    data += "Año:\t" + año + "\n";
                    data += "Numeros de subscripciones:\t" + datos2[pos1].substring(2, limit2) + "\n";
                }
            } catch (err) {

            }

        }

        resolve(data)
    });
};





module.exports = {
    leercsv: leercsv,
    generardatos: generardatos
}