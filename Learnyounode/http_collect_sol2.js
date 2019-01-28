var http = require('http');
var bl = require('bl');

var url = process.argv[2];
var finalStr;

http.get(url, function callback(response){
    response.pipe(bl(function (err, data){
        finalStr = data.toString();
        console.log(finalStr.length);
        console.log(finalStr);
    }))
    response.on("error", console.error)
}).on('error', console.error);