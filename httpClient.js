var http = require('http');

var uri = process.argv[2];

var callback = function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
     console.log(chunk);
    });
    response.on('end', function() {
    });
    response.on('error', function(err){
        throw err;
    });
};

var req = http.get(uri,callback);