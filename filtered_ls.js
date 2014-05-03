var fs = require('fs'),
    regex = new RegExp('\\.' + process.argv[3] + '$');

fs.readdir(process.argv[2], function(err, list) {
  if (err)
    throw err;

  list.forEach(function(element, index) {
    if (regex.test(element)) {
      console.log(element);
    }
  });
});
