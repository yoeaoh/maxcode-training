// https://maxcode.dev/problems/flatten-arr/

function flattenArr(arr, depth = 1) {
    if (depth === 0) {
        return [...arr];
    }

    let resultArray = [];

    for (const item of arr) {
        if (!Array.isArray(item)) {
            resultArray.push(item);
            
            continue
        }

        const flattenItem = flattenArr(item, depth - 1);
    
        for (const innerItem of flattenItem) {
            resultArray.push(innerItem);
        }        
    }

    return resultArray;
}

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];

console.dir(x, {depth: null});

console.log('---');

console.dir(flattenArr(x, 0), {depth: null}) // [1, [[2, [3, 4, [5]], 6], [7]], [8]]
console.dir(flattenArr(x, 2), {depth: null}) // [1, [2, [3, 4, [5]], 6], [7], 8]
console.dir(flattenArr(x, 2), {depth: null}) // [1, 2, [3, 4, [5]], 6, 7, 8]
console.dir(flattenArr(x, Infinity), {depth: null}) // [1, 2, 3, 4, 5, 6, 7, 8]
