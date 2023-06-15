// const input = `10.3 203.0 5.0`
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a,b,c] = input.split(' ').map(Number);
let calculateRoots = (A, B, C)=> {
  let delta = B * B - 4 * A * C;
  if (A === 0 || delta < 0) {
    return "Impossivel calcular";
  }
  let R1 = (-B + Math.sqrt(delta)) / (2 * A);
  let R2 = (-B - Math.sqrt(delta)) / (2 * A);
  return `R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`;
}
console.log(calculateRoots(a,b,c));
