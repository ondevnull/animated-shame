var port = process.argv[2];

function getTheDate () {
  var theDate = new Date();
  var d = new Date();

  function check (data) {
    if (data < 10)
      data = "0" + data;

    return data;
  }

  function getMonth () {
    var res = d.getMonth() + 1;

    res = check(res);

    return res;
  }

  function getDate () {
    var res = d.getDate();

    res = check(res);

    return res;
  }

  function getHours () {
    var res = d.getHours();

    res = check(res);

    return res;
  }

  function getMinutes () {
    var res = d.getMinutes();

    res = check(res);

    return res;
  }

  theDate = theDate.getFullYear() + "-" + getMonth() + "-" + getDate() + " " + getHours() + ":" + getMinutes() + "\n";

  return theDate;
}

function theServer (socket) {
  var data = getTheDate();

  socket.write(data);
  socket.end();
}

var server = require('net').createServer(theServer);

server.listen(port);
