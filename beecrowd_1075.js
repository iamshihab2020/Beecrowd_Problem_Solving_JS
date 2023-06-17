const input = `13`
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [n] = input.split(' ').map(Number);



function division(n){
  for(let i  = 1; i<=10001; i++){
    if(i % n === 2){
      console.log(i)
    }
  }
}
division(n)