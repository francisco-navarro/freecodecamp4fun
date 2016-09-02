var http = require('http');
var net = require('net');
var moment = require('moment');

var port = process.argv[2]; 

var server = net.createServer(function (sock) { 
      sock.write(moment().format('YYYY-MM-DD HH:mm'))
      sock.write('\n');
      sock.end();
});

server.listen(port, function(){
});
