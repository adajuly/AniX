let pkg = require('../package.json');
let fs = require('fs');
let path = require('path');

delete pkg.scripts;

let newPkg = Object.assign({}, pkg, {
    name: 'anix',
    main: 'index.js',
    typings: 'index.d.ts'
});

let url = '../dist/anix/';

fs.writeFileSync(url + 'package.json', JSON.stringify(newPkg, null, 2));
fs.writeFileSync(url + 'README.md', fs.readFileSync('./README.md').toString());