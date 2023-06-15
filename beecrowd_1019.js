// const input = `140153`
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [sec] = input.split('\n').map(Number);
let hms = (sec)=>{
  let hours = Math.floor(sec / 3600) 
  let minutes = Math.floor((sec % 3600) / 60) 
  let seconds = Math.floor((sec % 3600) % 60)

  console.log(`${hours}:${minutes}:${seconds}`)
}
hms(sec)

/**
 *  hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = (seconds % 3600) % 60
 */