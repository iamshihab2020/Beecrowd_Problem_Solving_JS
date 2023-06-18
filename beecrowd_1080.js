let input = `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 110, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 111`
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = input.split(' ').map(Number);
let highestValue = -Infinity;
let position = -1;
for (let i = 1; i < numbers.length; i++) {
  const currentNumber = numbers[i];

  if (currentNumber > highestValue) {
    highestValue = currentNumber;
    position = i + 1;
  }
}

console.log('Highest value:', highestValue);
console.log('Position:', position);
