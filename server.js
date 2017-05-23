var http = require('http');
var random = require('./modOne');
var converter = require('./modTwo');
var text = require('./modThree');

http.createServer(function(req, res) {
  //req is the http request that is received

  //res is the http reponse that we will send
  res.write(text.balance());
  res.write(text.passMod());
  res.end(); //send the repsonse now
}).listen(3000); // listening on port 3000
