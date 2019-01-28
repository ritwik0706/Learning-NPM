var net = require('net');

var port = 8000;

var date = new Date();
var year = date.getFullYear().toString();
var month ;
if(date.getMonth() + 1 < 10){
    month = "0" + (date.getMonth() + 1).toString();
}
else{
    month = (date.getMonth() + 1).toString();
}
console.log(month)

/*var server = net.createServer(function (socket){
    console.log('Socket ID :' + socket.id);
});

server.listen(port);*/