var http = require('http'),
    BufferList = require('bl'),
    bl = new BufferList();

function call (url, is) {
  http.get(process.argv[2], function (response) {

    response.on('error', function (err) {
      console.error(err);
    });

    response.on('end', function (data) {
      bl.append(data);

      if (is < 3) {
        is++;
        call(process.argv[is + 1], is);
      } else {
        console.log(bl.toString());
      }
    });
  });
};

call(process.argv[2], 1);
