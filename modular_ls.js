var mymodule = require('./filtered_ls_module.js');

var path = process.argv[2];
var ext = process.argv[3];



mymodule(path, ext, function(err, data){
    if (err){
        return console.log(err);
    }else{
        var i;
        for(i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    }
});