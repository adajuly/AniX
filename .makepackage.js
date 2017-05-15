let pkg = require('./package.json');
let fs = require('fs');
let path = require('path');


delete pkg.scripts;

let cjsPkg = Object.assign({}, pkg, {
    name: 'anix',
    main: 'index.js',
    typings: 'index.d.ts'
});

let url = 'dist/cjs/';

fs.writeFileSync(url + 'package.json', JSON.stringify(cjsPkg, null, 2));
fs.writeFileSync(url + 'README.md', fs.readFileSync('./README.md').toString());