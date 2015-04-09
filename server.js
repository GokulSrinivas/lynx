var sys = require('sys'),
    http = require('http'),
    fs = require('fs'),
    index;
 
fs.readFile('./public/index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});
 
http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(index);
    response.end();
}).listen(8001);
