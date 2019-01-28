var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var date = strftime('%F %H:%M') + "\n";

var server = net.createServer(function (socket){
    socket.end(date);
});

server.listen(port);