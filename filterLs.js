var fs = require('fs');

var path = process.argv[2];

var extension = new RegExp('\.'+process.argv[3]+'$','gm');

fs.readdir(path,function(err, list){
    if(err) throw err;
    list.forEach(function(item){
        if(item.match(extension)){
            console.log(item);
        }
    });
});
