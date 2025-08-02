// https://maxcode.dev/problems/bind/

Function.prototype.bind2 = function(thisArg, ...args) {
    return (...args2) => {
        if (thisArg === undefined || thisArg === null) {
            return this(...args);
        }

        const context = Object(thisArg);
        const fnKey = Symbol();

        context[fnKey] = this;
        const result = context[fnKey](...args, ...args2);
        delete context[fnKey];

        return result
    }
};

function f(a, b, c) {
  return this.x + a + b + c;
}

const obj = { x: 1 };
const foo = f.bind2(obj, 10, 100);

console.log(foo(2000)); // 2111
console.log(foo(3000)); // 3111
