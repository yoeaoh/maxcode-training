// https://maxcode.dev/problems/call/

Function.prototype.call2 = function(newThis, ...args) {
    return this;
};

function f(a, b) {
    return this.x + a + b;
}

const obj = { x: 100 };

f.call2(obj, 20, 3) === 123
