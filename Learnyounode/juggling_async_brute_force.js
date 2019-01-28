var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var str1 = '';
var str2 = '';
var str3 = '';

http.get(url1, function callback(response){
    response.pipe(bl(function (err, data){
        str1 = data.toString();
        console.log(str1);

        http.get(url2, function callback(response){
            response.pipe(bl(function (err, data){
                str2 = data.toString();
                console.log(str2);

                http.get(url3, function callback(response){
                    response.pipe(bl(function (err, data){
                        str3 = data.toString();
                        console.log(str3);
                    }))
                    response.on("error", console.error)
                }).on('error', console.error);

            }))
            response.on("error", console.error)
        }).on('error', console.error);
    }))
    response.on("error", console.error)
}).on('error', console.error);