Function.prototype.bind2 = function(thisArg, ...args) {
    return (...args2) => {
        return this.call(thisArg, ...args, ...args2);

        // const fnKey = Symbol();
        // thisArg[fnKey] = this;

        // const result = thisArg[fnKey](...args, ...args2);

        // delete thisArg[fnKey];

        // return result
    }
};

function f(a, b, c) {
  return this.x + a + b + c;
}

const obj = { x: 1 };
const foo = f.bind2(obj, 10, 100);

console.log(foo(2000)); // 2111
console.log(foo(3000)); // 3111
