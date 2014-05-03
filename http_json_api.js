var http = require('http');
var server = http.createServer(function (req, res) {
  var url = require('url').parse(req.url, true);
  if (req.method === 'GET' && url.pathname === '/api/parsetime') {
    var date = new Date(url.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }));
    res.end();
  } else if (req.method === 'GET' && url.pathname === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.write(JSON.stringify({
      "unixtime": (new Date(url.query.iso)).getTime()
    }));
    res.end();
  } else {
    res.statusCode(501);
    res.end();
  }
});

server.listen(process.argv[2]);
