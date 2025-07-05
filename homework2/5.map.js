// https://maxcode.dev/problems/map/

function map(array, callback) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array))
    }

    return result;
}

console.log(map([1, 2, 3], x => x ** 2));
// [1, 4, 9]

console.log(map(["a", "b", "c", "d"], (x, i) => x.repeat(i)));
// ["", "b", "cc", "ddd"]
