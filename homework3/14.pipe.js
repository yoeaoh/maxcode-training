// https://maxcode.dev/problems/pipe/

// Получилось наоборот, doublc => cube => inc
// А надо inc => cube => double

Function.prototype.pipe = function (fn) {
    const context = this;
    return function (test) {
        return context(fn(test));
    }
};

const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo2 = inc.pipe(cube).pipe(double);

console.log(foo2(1)); // 54

