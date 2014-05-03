var port = Number(process.argv[2]);
var http = require('http');
var fs = require('fs');

function httpServer (req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });

  fs.createReadStream(process.argv[3]).pipe(res);
}


var server = http.createServer(httpServer);

server.listen(port);
