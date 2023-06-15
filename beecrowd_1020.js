// const input = `800`
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [totalDays] = input.split('\n').map(Number);
let ymd = (totalDays)=>{
  let years = Math.floor(totalDays / 365) 
  let months = Math.floor((totalDays % 365) / 30) 
  let days = Math.floor((totalDays % 365) % 30)

  console.log(`${years} ano(s)`)
  console.log(`${months} mes(es)`)
  console.log(`${days} dia(s)`)
}
ymd(totalDays)
