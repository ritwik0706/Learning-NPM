var http = require('http');
var url = require('url');
var moment = require('moment')

var port  = process.argv[2];

var server = http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type' : 'text/plain'});

    var route = url.parse(req.url);
    var split = route.search.split('=')
    var date = new Date(split[1]);

    if(route.pathname == '/api/parsetime'){

        var time = {
            "hour" : date.getHours(),
            "minute" : date.getMinutes(),
            "second" : date.getSeconds()
        }

        res.end(JSON.stringify(time));

    }
    else if(route.pathname == '/api/unixtime'){
        
        var time = {
            "unixtime" : date.valueOf() 
        }

        res.end(JSON.stringify(time));

    }
    else{
        res.writeHead(404)
        res.end()
    }
    
});
server.listen(port);