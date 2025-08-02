// https://maxcode.dev/problems/call/

// Прошло 4 из 6 тестов, не прошло:
// 02. call is called on an original object
// 05. thisArg является строкой: [].every.call2("12345", (x) => x >= '0' && x <= '9')
Function.prototype.call2 = function(newThis, ...args) {
    if (newThis === undefined || newThis === null) {
        return this(...args);
    }

    const context = Object(newThis);
    const fnKey = Symbol();

    context[fnKey] = this;
    const result = context[fnKey](...args);
    delete context[fnKey];

    return result
};

function f(a, b) {
    // this.qwe = 1000;
    return this.x + a + b;
    // return a + b;
}

const obj = { x: 100, calledFn: true };
console.log(f.call2(obj, 20, 3))
console.log(obj); // { x: 100, qwe: 1000, calledFn: true }

console.log(f.call2(undefined, 20, 3))

console.log([].every.call2("12345", (x) => x >= '0' && x <= '9'))

// f.call2(obj, 20, 3) === 123

console.log(Object(1), Object(1) instanceof Number);
console.log(Object("qwe"), Object("qwe") instanceof String);

// const s = Object("qwe");
// s[1] = 1234;
// Нельзя, потому что:
// console.log(Object.getOwnPropertyDescriptor(s, 1));
