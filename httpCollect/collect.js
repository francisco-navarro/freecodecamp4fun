var http = require('http');
var bl = require('bl');

var uri = process.argv[2];

var req = http.get(uri,function(response){
    var data = new bl();
    
    response.pipe(data);
    response.on('end', function(){
        console.log(data.length);
        console.log(data.toString());
    });
});