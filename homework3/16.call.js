// https://maxcode.dev/problems/call/

// Прошло 4 из 6 тестов, не прошло:
// 02. call is called on an original object
// 05. thisArg является строкой: [].every.call2("12345", (x) => x >= '0' && x <= '9')
Function.prototype.call2 = function(newThis, ...args) {
    const fn = this;

    const context = {
        ...newThis,
        calledFn: fn,
    }

    return context.calledFn(...args);
};

function f(a, b) {
    return this.x + a + b;
}

const obj = { x: 100 };

// f.call2(obj, 20, 3) === 123
console.log(f.call2(obj, 20, 3))