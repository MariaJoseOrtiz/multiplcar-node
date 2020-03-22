// requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} =${base*i}`);;
    }
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} No es un numero`)
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} =${base*i}\n`;
        }
        fs.writeFile(`tabla/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.tx`)
        });
    });
}

//exportar funcion
module.exports = {
    crearArchivo,
    listarTabla
}