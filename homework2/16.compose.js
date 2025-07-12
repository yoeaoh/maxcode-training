// https://maxcode.dev/problems/compose/

function compose(...functions) {
    // TODO: Последовательность должна быть обратной, сначала
    // inc, потом cube, потом double
    // (1 + 1) * 2 ** 3

    let counter = 0;
    let currentResult = 0;

    return function(arg) {
        console.log(currentResult, arg, functions[counter]);
        currentResult = functions[counter](arg);
        counter++;

        return currentResult;
    }
    // return function(argument) {
    //     if (counter > functions.length) {
    //         counter = 0;
    //     }
    //
    //     counter++;
    //
    //     return functions[counter](argument);
    // }
}

const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo = compose(double, cube, inc);

console.log(foo(0)); // 2
console.log(foo(1)); // 16
console.log(foo(2)); // 54

// const fill = x => Array(3).fill(x);
// const repeat = x => x.repeat(5);
// const last = arr => arr.at(-1);
//
// const foo1 = compose(fill, repeat, last);
//
// console.log(foo1(["a", "b", "c"]));
// // ["ccccc", "ccccc", "ccccc"]
//
// const foo2 = compose();
//
// console.log(foo2("a")); // "a"
// console.log(foo2(5));   // 5
