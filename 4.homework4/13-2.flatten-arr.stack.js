// https://maxcode.dev/problems/flatten-arr/

function flattenArr(arr, depth = 1) {
    const stack = [];
    const result = [];

    stack.push([arr, 0]);

    while (stack.length > 0) {
        const [currentItem, currentDepth] = stack.pop();

        if (!Array.isArray(currentItem) || depth <= currentDepth) {
            result.push(currentItem)
            // for (const innerItem of currentItem) {
            //     result.push(innerItem)
            // } 
        } else {
            for (let i = currentItem.length - 1; i >= 0; i--) {
                stack.push([currentItem[i], currentDepth + 1])
            }

        }
    }

    return result;
}

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];

console.dir(x, {depth: null});

console.log('---');

console.dir(flattenArr(x, 0), {depth: null}) // [1, [[2, [3, 4, [5]], 6], [7]], [8]]
console.dir(flattenArr(x, 1), {depth: null}) // [1, [2, [3, 4, [5]], 6], [7], 8]
console.dir(flattenArr(x, 2), {depth: null}) // [1, 2, [3, 4, [5]], 6, 7, 8]
console.dir(flattenArr(x, Infinity), {depth: null}) // [1, 2, 3, 4, 5, 6, 7, 8]
