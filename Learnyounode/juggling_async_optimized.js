var http = require('http');
var bl = require('bl');

var str = [];
var url = [];
var count = 0;

function printstr(){
    for(var i = 0; i < 3; i++){
        console.log(str[i]);
    }
}

function getRes(index){

    http.get(url[index], function callback(response){
        response.pipe(bl(function (err, data){

            str[index] = data.toString();
            count++;

            if(count == 3){
                printstr();
            }

        }))
        response.on("error", console.error)
    }).on('error', console.error);

}


for (var i = 0; i < 3; i++){
    
    url[i] = process.argv[i+2];

    getRes(i);
}
