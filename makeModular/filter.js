var fs = require('fs');

function list(path, extension, callback){
    var filteredList = [];
    var matcher = new RegExp('\.'+extension+'$','m');
    
    fs.readdir(path, function(err, list){
        if(err){
            return callback(err);
        }
        list.forEach(function(item){
            if(item.match(matcher)){
                filteredList.push(item);
            }
        });
        return callback(null, filteredList);
    });
    
} 


module.exports=list;