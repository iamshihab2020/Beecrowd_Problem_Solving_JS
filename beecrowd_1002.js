var input = `100.64`;
var [R] = input.split('\n').map(Number);

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pi  = 3.14159
let area =  pi * (Math.pow(R,2))
console.log(`A=${area.toFixed(4)}`)