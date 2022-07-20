const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base table of multiplication',
    })
    .option('s', {
        alias:'start',
        type: 'number',
        default: 1,
        describe: 'Begin number',
    })
    .option('e', {
        alias:'end',
        type: 'number',
        default: 10,
        describe: 'End number',
    })
    .option('l', {
        alias:'list',
        type: 'boolean',
        default: false,
        describe: 'Show table output in console',
    })
    .check((argv, options) =>{
        if( isNaN(argv.base) ){
            throw Error('Base must be a number');
        }
        if( isNaN(argv.start) ){
            throw Error('Start must be a number');
        }
        if( isNaN(argv.end) ){
            throw Error('End must be a number');
        }
        if( argv.start > argv.end ){
            throw Error('Start must be less or equal than end');
        }
        return true;
    })
    .argv;

module.exports = argv;