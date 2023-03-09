const fs = require('fs');
const pug = require('pug');
const data = require('./testData.json');

const compiledFunction = pug.compileFile('src/index.pug');

const html = compiledFunction({data: data})

const buildDir = "./build";

if (!fs.existsSync(buildDir)){
  fs.mkdirSync(buildDir);
}
var stream = fs.createWriteStream(buildDir+"/index.html");

stream.once('open', function() {
  stream.end(html);
});