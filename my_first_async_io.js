var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err)
    throw err;

  var string = data.split('\n');
  console.log(string.length - 1);
});
