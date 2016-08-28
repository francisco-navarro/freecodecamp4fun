var fs = require('fs');

var newline = /\n/g;
var filename = process.argv[2];


var str = fs.readFile(filename, 'UTF-8', function(err, data){
    if(err){
        throw err;
    }
    console.log(data.match(newline).length);
});
