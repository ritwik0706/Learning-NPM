var fs = require('fs');

var files = undefined;
var filteredFiles = [];

var path = process.argv[2];
var ext = process.argv[3];

function readdirectory(callback){
    fs.readdir(path, function doneReading(err, data){
        files = data;
        var i;
        for(i = 0; i < files.length; i++){
            if(files[i].includes('.'+ext)){
                filteredFiles.push(files[i]);
            }
        }
        callback();
    })
}

function logMyLS(){
    var j ;
    for(j = 0; j < filteredFiles.length; j++){
        console.log(filteredFiles[j]);
    }
}

readdirectory(logMyLS);