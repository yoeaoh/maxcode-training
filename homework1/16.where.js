// https://maxcode.dev/problems/where/

function filterByShape(arr, where) {
    const filterWhere = Object.keys(where);
    console.log('keys', filterWhere)

    return arr.filter((item) => {
        for (let i = 0; i < filterWhere.length; i++) {
            if (item[filterWhere[i]] !== where[filterWhere[i]]) return false;
        }

        return true;
    })
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
