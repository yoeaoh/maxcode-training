// https://maxcode.dev/problems/flatten-arr/

function flattenArr(arr, depth = 1, currentDepth = 0) {
    if (!Array.isArray(arr)) {
        return arr;
    }

    let resultArray = [];

    for (const item of arr) {
        if (currentDepth < depth) {
            const newDepth = currentDepth + 1;
            const flattenItem = flattenArr(item, depth, newDepth);

            resultArray = resultArray.concat(flattenItem);

            continue;
        }

        resultArray.push(item);
    }

    return resultArray;
}

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];

console.dir(x, {depth: null});
console.dir(flattenArr(x, 2), {depth: null})

// console.log(flattenArr(x, 0) === [1, [[2, [3, 4, [5]], 6], [7]], [8]])

// console.log(flattenArr(x, 2) === [1, 2, [3, 4, [5]], 6, 7, 8])

// console.log(flattenArr(x, Infinity) === [1, 2, 3, 4, 5, 6, 7, 8])
