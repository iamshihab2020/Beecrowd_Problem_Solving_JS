const input = `-25.01`
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a] = input.split(' ').map(Number);
let interval = (a) =>{
  if(a>=0 && a<=25){
    console.log(`Intervalo [0,25]`)
  }
  else if (a>25 && a<=50){
    console.log(`Intervalo (25,50]`)
  }
  else if (a>50 && a<= 75){
    console.log("Intervalo (50,75]");
  }
  else if(a>75 && a<=100){
    console.log(`Intervalo (75,100]`)
  }
  else{
    console.log(`Fora de intervalo`)
  }
}
interval(a)


