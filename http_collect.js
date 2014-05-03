var http = require('http'),
    url = process.argv[2],
    bl = require('bl');

http.get(url, function (response) {
  response.pipe( bl(function (err, data) {
    if (err)
      return console.error(data);

    data = data.toString();

    console.log(data.length);

    console.log(data);
  }));
});
