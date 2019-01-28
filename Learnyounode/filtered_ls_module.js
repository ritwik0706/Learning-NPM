var fs  = require('fs');

module.exports = function (path, ext, callback){
    fs.readdir(path, function doneReading(err, data){
        if (err){
            return callback(err);
        }
        else{
            var filteredFiles = [];
            var i;
            for(i = 0; i < data.length; i++){
                if(data[i].includes('.'+ext)){
                    filteredFiles.push(data[i]);
                }
            }
            data = filteredFiles;
            callback(null, data);
        }
    })
}