var fs = require('fs');

var path = process.argv[2];

var arr = undefined

function caclNewline(callback){
    fs.readFile(path , function doneReading(err, fileContents) {
        var str = fileContents.toString();
        arr = str.split('\n');
        callback()
      })
}

function logresult(){
    console.log(arr.length - 1);
}

caclNewline(logresult);