"use strict";

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
Function.prototype.pipe = function (fn) {
    console.log("this1", this);
    return function (value) {
        console.log("this2", this);
        return fn(this(value));
    }.bind(this);
}

Function.prototype.pipe = function (fn) {
    console.log("this1", this);
    return (value) => {
        console.log("this2", this);
        return fn(this(value));
    };
}

const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo2 = inc.pipe(cube);

console.log(foo2.call("abc", 2)); // 27
// foo2(2);
