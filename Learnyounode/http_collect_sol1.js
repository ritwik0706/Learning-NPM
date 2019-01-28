var http = require('http');

var url = process.argv[2];
var finalstr = '';

http.get(url, function callback(response){
    response.setEncoding('utf8');
    response.on("data", function(data){
        finalstr += data;
    })

    response.on('end', function(){
        console.log(finalstr.length);
        console.log(finalstr);
    })

    response.on("error", console.error)
}).on('error', console.error);