// https://maxcode.dev/problems/where/

function filterByShape(arr, where) {
    const keys = Object.keys(where);
    console.log('keys', keys)

    return arr.filter((obj) => keys.every((key) => obj[key] === where[key]));
}

const arr = [
    { a: 1, b: 1, c: 1 },
    { a: 2, b: 1, c: 1 },
    { a: 1, b: 2, c: 1 },
    { a: 1, b: 1, c: 2 },
    { a: 1, b: 2, c: 2 },
    { a: 2, b: 1, c: 2 },
    { a: 2, b: 2, c: 2 },
];

console.log(filterByShape(arr, {a: 1}));
// [
//   { a: 1, b: 1, c: 1 },
//   { a: 1, b: 2, c: 1 },
//   { a: 1, b: 1, c: 2 },
//   { a: 1, b: 2, c: 2 },
// ]

console.log(filterByShape(arr, { a: 1, b: 2 }));
// [
//   { a: 1, b: 2, c: 1 },
//   { a: 1, b: 2, c: 2 },
// ]
