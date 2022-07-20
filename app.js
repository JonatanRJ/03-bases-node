const { crearArchivo } = require('./helpers/multiply');
const argv = require('./yargs/config');
const colors = require('./colors/config');

crearArchivo( argv.base, argv.list, argv.start, argv.end )
    .then(nombreArchivo => console.log( colors.ok( `${ nombreArchivo } creado` ) ) )
    .catch( err => console.log(  colors.error( err )  ) );