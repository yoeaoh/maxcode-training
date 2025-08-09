// https://maxcode.dev/problems/flatten-arr/

function flattenArr(arr, depth) {

}

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];

flattenArr(x) === [1, [2, [3, 4, [5]], 6], [7], 8];

flattenArr(x, 0) === [1, [[2, [3, 4, [5]], 6], [7]], [8]]

flattenArr(x, 2) === [1, 2, [3, 4, [5]], 6, 7, 8]

flattenArr(x, Infinity) === [1, 2, 3, 4, 5, 6, 7, 8]
