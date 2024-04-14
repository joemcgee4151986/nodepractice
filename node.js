var http = require('http');
var dt = require('./date');
var fs = require('fs');
http.createServer(function(req,res){
    fs.appendFile('newfile.html', 'Hello', function(err){
    if (err) throw err;
    console.log('saved!')
    fs.readFile('nodepractice.html', function(err,data){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    })
    });
}).listen(3000);

