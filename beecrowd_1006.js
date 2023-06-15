var input = `5.0
6.0
7.0`;
var [a,b,c] = input.split('\n').map(Number);

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

function avg1(a,b){
    let result = ((a*2)+(b*3)+(c*5))/(2+3+5)
    console.log(`MEDIA = ${result.toFixed(1)}`)
}
avg1(a,b)

