var fs = require('fs'),
    path = require('path');

modules.exports = function(dir, filter, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err);

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filter
    });

    callback(null, list);
  });
};
