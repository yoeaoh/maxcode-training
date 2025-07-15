// https://maxcode.dev/problems/spy/

function spy(fn) {
    let calls = 0;
    const usedArguments = new Set();
    const returnedValues = new Set();

    const spyFunc = function(...args) {
        const result = fn(...args);

        calls = calls + 1;
        args.forEach(arg => usedArguments.add(arg));
        returnedValues.add(result);

        return result;
    }

    spyFunc.callCount = () => calls;
    spyFunc.wasCalledWith = (targetArgument) => usedArguments.has(targetArgument);
    spyFunc.returned = (targetValue) => returnedValues.has(targetValue);

    return spyFunc
}

function repeat(str, count) {
    return str.repeat(count);
}

const spyRepeat = spy(repeat);

console.log(spyRepeat("abc", 2)); // === "abcabc"
console.log(spyRepeat("xx", 4)); // === "xxxxxxxx"

console.log(spyRepeat.callCount()); // === 2

console.log(spyRepeat.wasCalledWith("abc")); // === true
console.log(spyRepeat.wasCalledWith(4)); // === true
console.log(spyRepeat.wasCalledWith(5)); // === false

console.log(spyRepeat.returned("xxxxxxxx")); // === true
console.log(spyRepeat.returned("qwerty")); // === false


