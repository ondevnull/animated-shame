var filter = require('./mod_filtered_ls'),
    dir = process.argv[2],
    str = process.argv[3];

filter(dir, str, function (err, list) {
  if (err)
    return console.error('There was an error:', err);

  list.forEach(function (file) {
    console.log(file);
  });
});
