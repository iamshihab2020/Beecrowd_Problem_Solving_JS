const input = `10
85`
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a, b] = input.split('\n').map(Number);


function distance(a,b){
    const result = ((a*b)/12)
    console.log(result.toFixed(3))
}

distance(a, b)


