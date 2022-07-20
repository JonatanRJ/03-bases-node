const colors = require('colors');

colors.setTheme({
    verbose: 'cyan',
    error: ['red','underline'],
    ok: 'green',
})

module.exports = colors;