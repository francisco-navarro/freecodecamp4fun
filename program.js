var fs = require('fs');

var newline = /\n/g;
var filename = process.argv[2];


var buf = fs.readFileSync(filename);
var str = buf.toString();

console.log(str.match(newline).length);