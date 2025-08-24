// https://maxcode.dev/problems/some/

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true
        }
    }

    return false;
}

console.log(some([1, 2, 3, 4], x => x > 2));
// true

console.log(some([1, 2, 3, 4], x => x > 20));
// false

console.log(some(["a", "b", "c", "d"], (x, i) => x.length >= i));
// true

