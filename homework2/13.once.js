// https://maxcode.dev/problems/once/

function once(fn) {
    let isTriggered = false;

    return function (...args) {
        if (isTriggered) {
            return
        }

        isTriggered = true;

        return fn(...args)
    }
}

const sum = (a, b) => a + b;
const double = a => a * 2;

const onceSum = once(sum);
const onceDouble = once(double);

console.log(onceSum(2, 3)); // 5
console.log(onceSum(5, 6)); // undefined
console.log(onceSum(2, 3)); // undefined
console.log(onceSum(1, 1)); // undefined

console.log(onceDouble(3)); // 6
console.log(onceDouble(5)); // undefined
console.log(onceDouble(4)); // undefined
