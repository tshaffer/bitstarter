var express = require('express');
var app = express();
app.use(express.logger());

var fs = require("fs");

app.get('/', function(request, response) {
  var buf = fs.readFileSync("index.html");
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
