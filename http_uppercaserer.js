var http = require('http');
var through = require('through');

function httpServer (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (buf) {
      this.queue(buf.toString().toUpperCase());
    })).pipe(res);
  }
}

var server = http.createServer(httpServer);
server.listen(process.argv[2]);
