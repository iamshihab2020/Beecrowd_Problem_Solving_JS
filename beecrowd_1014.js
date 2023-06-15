var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var input = `500 
// 35.0`
var [a,b] = input.split('\n').map(Number);

var result = a/b
console.log(`${result.toFixed(3)} km/l`)

