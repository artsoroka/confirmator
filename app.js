var http = require('http'),
    fs = require('fs'); 
 
var server = http.createServer(function (req, res) {
  html = fs.readFileSync('index.html'); 

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
}).listen(8080); 
