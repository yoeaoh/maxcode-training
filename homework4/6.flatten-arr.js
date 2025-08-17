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

function flattenArrStack(arr, depth = 1) {
    const result = [];
    const stack = [];

    let currentDepth = 0;

    stack.push(arr);

    while (stack.length > 0) {
        const lastItem = stack.pop();

        if (Array.isArray(lastItem) && depth >= currentDepth) {
            currentDepth += 1;

            // for (let i = lastItem.length; i !== 0; i--) {
            //     stack.push(lastItem[i]);
            // }

            for (const item of lastItem) {
                stack.push(item);
            }
        } else {
            result.push(lastItem);
        }
    }

    return result.reverse();
}


// TODO: DONE, но нужно переписать (избавиться от внутренней
//  функции или в другом месте считать количество внутренних
//  массивов, и переписать for на for of)
function flattenArrStack2(arr, depth = 1) {
    let arraysCounter = 0;

    function flattenArrSingleLayer(arr) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arraysCounter += 1;

                for (let j = 0; j < arr[i].length; j++) {
                    result.push(arr[i][j]);
                }
            } else {
                result.push(arr[i]);
            }
        }

        return result;
    }

    let result = [...arr];

    for (let i = 0; i < depth; i++) {
        arraysCounter = 0;

        result = flattenArrSingleLayer(result);

        if (arraysCounter === 0) break;
    }

    return result;
}

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];

console.dir(x, {depth: null});

console.log('---');

// console.dir(flattenArrStack2(x, 0), {depth: null}) // [1, [[2, [3, 4, [5]], 6], [7]], [8]]
console.dir(flattenArrStack2(x, 2), {depth: null}) // [1, [2, [3, 4, [5]], 6], [7], 8]
// console.dir(flattenArrStack2(x, 2), {depth: null}) // [1, 2, [3, 4, [5]], 6, 7, 8]
console.dir(flattenArrStack2(x, Infinity), {depth: null}) // [1, 2, 3, 4, 5, 6, 7, 8]
