// const input = `5 6 7 8`
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a,b,c,d] = input.split(' ').map(Number);
let selection  = ()=>{
  
  if(b>c && d>a && (c+d) > (a+b) && c>0 && d>0 && (a%2===0)){
    console.log(`Valores aceitos`)
  }
  else{
    console.log(`Valores nao aceitos`)
  }
  
}
selection (a,b,c,d)

