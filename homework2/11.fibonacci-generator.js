// https://maxcode.dev/problems/fibonacci-generator/

function fibonacciGenerator() {
    let uno = 0
    let dos = 1

    return function() {
        const resultado = uno
        
        ;[uno, dos] = [dos, uno + dos]

        return resultado
    }
}

// iife

// console.log(123)

// ;(function() {

// }());

const gen = fibonacciGenerator();

console.log(gen()); // 0
console.log(gen()); // 1
console.log(gen()); // 1
console.log(gen()); // 2
console.log(gen()); // 3
console.log(gen()); // 5
console.log(gen()); // 8
console.log(gen()); // 13
console.log(gen()); // 21
console.log(gen()); // 34
