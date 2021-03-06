const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('Crear', 'Crea una Tabla de Multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}