// https://maxcode.dev/problems/equal-arrays/

// https://github.com/apple-opensource/JavaScriptCore/blob/0fef5867b35d102552ed4076e69809e9c5c0cb98/builtins/ArrayPrototype.js#L257

function equalArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const length = arr1.length;

    const firstArrayValues = new Map();

    for (let i = 0; i < length; i++) {
        const currentValue = firstArrayValues.get(arr1[i]) ?? 0;
        firstArrayValues.set(arr1[i], currentValue + 1);
    }

    for (let i = 0; i < length; i++) {
        if (firstArrayValues.get(arr2[i]) === undefined) return false;

        firstArrayValues.set(arr2[i], firstArrayValues.get(arr2[i]) - 1);

        if (firstArrayValues.get(arr2[i]) < 0) return false;
    }

    return true;
}

console.log(equalArrays([1, 3, 2], [1, 2, 3])); // true
console.log(equalArrays([3, 1, 2], [3, 1, 2])); // true
console.log(equalArrays(["1", 1, true], [true, 1, "1"])); // true

console.log(equalArrays(
    [null, null, null],
    [null, null, null],
)); // true

const objects = [{x: 1}, {x: 2}];

console.log(equalArrays(
    objects,
    objects.toReversed(),
)); // true

console.log(equalArrays([1, 2, 1], [2, 1, 2])); // false
console.log(equalArrays([1, 2, 3], [1, 2, 3, 4])); // false
