// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = `25
100
5.50`;
var [a,b,c] = input.split('\n').map(Number);

function result(a,b,c){

    let salary = b * c

    console.log(`NUMBER = ${a}`)

    console.log('SALARY = U$ '+salary.toFixed(2))
}
result(a,b,c)