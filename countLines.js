var fs = require('fs');

var newline = /\n/g;
var filename = process.argv[2];


var str = fs.readFileSync(filename, 'UTF-8');

console.log(str.match(newline).length);