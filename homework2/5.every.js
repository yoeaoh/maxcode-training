// https://maxcode.dev/problems/every/

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === false) {
            return false;
        }
    }

    return true;
}

console.log(every([1, 2, 3, 4], x => x > 2));
// false

console.log(every([1, 2, 3, 4], x => x > 0));
// true

console.log(every(["a", "b", "c", "d"], (x, i) => x.length >= i));
// false
