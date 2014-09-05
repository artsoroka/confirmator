var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.all('/ajax', function(req, res){
  console.log('request recieved'); 
  res.send('done');
});

app.listen(8080);
