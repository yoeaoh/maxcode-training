// https://maxcode.dev/problems/reduce/

function reduce(array, callback, initialValue) {
    if (initialValue === undefined && array.length === 0) {
        console.log('Reduce of empty array with no initial value')
        // throw new TypeError("Reduce of empty array with no initial value");
    }

    const hasInitialValue = arguments.length === 3;

    let result = hasInitialValue ? initialValue : array[0];
    const startingPoint = hasInitialValue ? 0 : 1;

    for (let i = startingPoint; i < array.length; i++) {
        result = callback(result, array[i], i, array)
    }

    return result;
}

console.log([1,2,3].reduce((a, b) => a + b, 0))
console.log([1,2,3].reduce((a, b) => a + b))

console.log(reduce([1,2,3], (a, b) => a + b, 0))
console.log(reduce([1,2,3], (a, b) => a + b))

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// // 10

// console.log(reduce([], (a, b) => a + b, 0));
// // 0

// console.log(reduce([], (a, b) => a + b));
// // TypeError: Reduce of empty array with no initial value

// console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a }), {}));
// // { "c": { "b": { "a": {} } } }

// console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a })));
// // { "c": { "b": "a"} }

