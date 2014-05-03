var fs = require('fs'),
    file = fs.readFileSync(process.argv[2]),
    string = file.toString();

string = string.split('\n');
console.log(string.length - 1);
