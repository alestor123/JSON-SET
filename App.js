var {readFileSync,writeFileSync} = require('fs')
module.exports = (path,main) => {
if(!(path&&main)) throw Error('Please enter the path and data')
var data = JSON.parse(readFileSync(path).toString()),
spl = main.split((/[=]/));
data[spl[0]] = spl[1]
writeFileSync('./lol.json',JSON.stringify(data))
}