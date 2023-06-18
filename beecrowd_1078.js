const input = `140`
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [n] = input.split(' ').map(Number);


let multiTable = (n)=>{
  for(let i = 1 ; i <= 10; i++){
    result = i * n;
    console.log(`${i} x ${n} = ${result}`)
  }
}
multiTable(n)