const input = `576`
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [value] = input.split('\n').map(Number);


function calculateBanknotes(value) {
    const banknotes = [100, 50, 20, 10, 5, 2, 1];
    let remaining = value;
  
    console.log(value);
  
    for (let banknote of banknotes) {
      const quantity = Math.floor(remaining / banknote);
      remaining %= banknote;
      console.log(`${quantity} nota(s) de R$ ${banknote},00`);
    }
  }
  
  // Example usage
  calculateBanknotes(value);

