// https://maxcode.dev/problems/reduce/

function reduce(array, callback, initialValue) {
    if (initialValue === undefined && array.length === 0) {
        console.log('Reduce of empty array with no initial value')
        // throw new TypeError("Reduce of empty array with no initial value");
    }

    const startingValue = arguments.length === 3 ? initialValue : array[0];

    let result = startingValue;

    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i, array)
    }

    return result;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// 10

console.log(reduce([], (a, b) => a + b, 0));
// 0

console.log(reduce([], (a, b) => a + b));
// TypeError: Reduce of empty array with no initial value

console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a }), {}));
// { "c": { "b": { "a": {} } } }

console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a })));
// { "c": { "b": "a"} }

