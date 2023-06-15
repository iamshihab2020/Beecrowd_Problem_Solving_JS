var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c,d] = input.split('\n').map(Number);

function result(a,b,c,d){
    var different = (a*b)-(c*d)
    console.log(`DIFERENCA = ${different}`)
}
result(a,b,c,d)