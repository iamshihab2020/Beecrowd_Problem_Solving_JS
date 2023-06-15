var input = `5.0
7.1`;
var [a,b] = input.split('\n').map(Number);

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

function avg1(a,b){
    let result = ((a*3.5)+(b*7.5))/(3.5+7.5)
    console.log(`MEDIA = ${result.toFixed(5)}`)
}
avg1(a,b)

