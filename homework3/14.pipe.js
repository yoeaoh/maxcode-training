// https://maxcode.dev/problems/pipe/

// Получилось наоборот, double => cube => inc
// А надо inc => cube => double

// Function.prototype.pipe = function (fn) {
//     const context = this;
//     return function (value) {
//         return context(fn(value));
//     }
// };

Function.prototype.pipe = function (fn) {
    const context = this;

    return function (value) {
        return fn(context(value));
    }
}

const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo2 = inc.pipe(cube).pipe(double);

console.log(foo2(2)); // 54
// foo2(2);
