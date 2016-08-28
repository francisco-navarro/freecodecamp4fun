var filter = require('./filter');

var path = process.argv[2];
var extension = process.argv[3];


filter(path, extension, function(err, data) {
    if(err){
        console.error(err);
    }
    data.forEach(function(item){
        console.log(item)
    });
});