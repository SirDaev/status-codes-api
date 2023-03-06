const fs = require('fs');
const pug = require('pug');
const data = require('./testData.json');

const compiledFunction = pug.compileFile('src/index.pug');

const html = compiledFunction({data: data})

var stream = fs.createWriteStream("index.html");

stream.once('open', function(fd) {
  stream.end(html);
});