let pkg = require('../package.json');
let prependFile = require('prepend-file');

let banner = (name, v) => {
    return `/**
* ${name} - VERSION(${v}) - https://github.com/drawcall/AniX
*/
`
};

prependFile('./dist/jq/anix.jq.js', banner('anix.jq', pkg.version), function(err) {
    if (!err) {
        console.log('banner added');
    }
});

prependFile('./dist/umd/anix.umd.js', banner('anix.umd', pkg.version), function(err) {
    if (!err) {
        console.log('banner added');
    }
});