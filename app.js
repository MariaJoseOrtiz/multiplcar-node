//destructurarion de objetos
//importar funcion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
const argv = require('./config/yargs.js').argv
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('============='.green);
        console.log(`Tabla de ${argv.base}`.green);
        console.log('============='.green);
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}
//pasar variable en este caso la base
//let argv = process.argv;
//let parametro = argv[2];
//separar en un array por el igual
//let base = parametro.split('=')[1]






// packege se crea con npm init