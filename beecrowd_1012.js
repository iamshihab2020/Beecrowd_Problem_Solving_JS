// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

class Geometry{
    constructor(a, b, c){
        this.a = a
        this.b = b
        this.c = c
    }

    calculateTriangleArea(){
        return ((this.a * this.c) / 2)
    }

    calculateCircleArea(){
        const pi = 3.14159
        return (pi * Math.pow(this.c, 2))
    }

    calculateTrapeziumArea(){
        return (((this.a + this.b)/2) * c)
    }

    calculateSquareArea(){
        return (Math.pow(this.b, 2))
    }

    calculateRectangleArea(){
        return (this.a * this.b);
    } 

    printResult(){
        const triangle = this.calculateTriangleArea().toFixed(3)
        const circle = this.calculateCircleArea().toFixed(3)
        const trapezium = this.calculateTrapeziumArea().toFixed(3)
        const square = this.calculateSquareArea().toFixed(3)
        const rectangle  = this.calculateRectangleArea().toFixed(3)

        console.log(`TRIANGULO: ${triangle}`)
        console.log(`CIRCULO: ${circle}`)
        console.log(`TRAPEZIO: ${trapezium}`)
        console.log(`QUADRADO: ${square}`)
        console.log(`RETANGULO: ${rectangle}`)
    }

}


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c] = input.split(' ').map(Number);

const calculator = new Geometry(a, b, c);
calculator.printResult();
