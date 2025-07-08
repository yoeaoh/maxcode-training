// https://maxcode.dev/problems/fibonacci-generator/

function fibonacciGenerator() {
    let contador = 0;
    // захотел назвать uno и dos, и пришлось всё остальное
    // на испанский переводить..
    let uno = 0
    let dos = 1

    return function() {
        if (contador === 0) {
            contador++;
            return uno;
        }

        if (contador === 1) {
            contador++;
            return dos;
        }

        const resultado = uno + dos;

        uno = dos;
        dos = resultado;

        return resultado;
    }
}

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
