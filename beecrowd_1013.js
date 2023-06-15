var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var input = `7 14 106`
var [a,b,c] = input.split(' ').map(Number);

var result = Math.max(a, b, c)
console.log(`${result} eh o maior`)

