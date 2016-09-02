var http = require('http');
var bl = require('bl');
var async = require('async');

var uris = [
        process.argv[2],
        process.argv[3],
        process.argv[4]
    ];
var responses = [];

function fetchUri(uri, index, callback){
    return http.get(uri,function(response){
        var data = new bl();
        
        response.pipe(data);
        response.on('end', function(){
            responses[index] = data.toString();
            callback();
        });
    });
}

async.parallel([
    function (callback){
        fetchUri(uris[0], 0, callback);
    },
    function (callback){
        fetchUri(uris[1], 1, callback);
    },
    function (callback){
        fetchUri(uris[2], 2, callback);
    }], function(err) {
        if (err) {
            console.error(err);
        }
        console.log(responses[0]);
        console.log(responses[1]);
        console.log(responses[2]);
    }
);