// https://maxcode.dev/problems/zip/

function zip(a, b, callback) {
    const result = [];
    const resultLength = Math.min(a.length, b.length);

    for (let i = 0; i < resultLength; i++) {
        result.push(callback(a[i], b[i]))
    }

    return result
}

console.log(zip(
    [1, 2, 3],
    [5, 6, 7],
    (a, b) => a * b,
));
// [5, 12, 21]

console.log(zip(
    ["abc", "f", "qw"],
    [1, 6, 2, 9, 3],
    (x, i) => x.repeat(i),
));
// ["abc", "ffffff", "qwqw"]
