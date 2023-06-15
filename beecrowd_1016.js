// const input = "1.0 7.0\n5.0 9.0";
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [x1, y1, x2, y2] = input.split(/\s+/).map(Number);


function distance(x1, y1, x2, y2){
    const result = Math.sqrt( (Math.pow((x2-x1), 2)) + Math.pow((y2-y1), 2) )
    console.log(result.toFixed(4))
}
distance(x1, y1, x2, y2)

