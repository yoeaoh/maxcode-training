// https://maxcode.dev/problems/flatten-arr/

// TODO: DONE, но нужно переписать (избавиться от внутренней
//  функции или в другом месте считать количество внутренних
//  массивов, и переписать for на for of)
function flattenArr(arr, depth = 1) {
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


// NOTE: Это, вроде бы, работало, но не совсем как надо: разворачивался
//  не весь слой массивов на текущей глубине, а только последний
//  элемент, что не соответствует условию.

// function flattenArr__stack1(arr, depth = 1) {
//     const result = [];
//     const stack = [];
//
//     let currentDepth = 0;
//
//     stack.push(arr);
//
//     while (stack.length > 0) {
//         const lastItem = stack.pop();
//
//         if (Array.isArray(lastItem) && depth >= currentDepth) {
//             currentDepth += 1;
//
//             // for (let i = lastItem.length; i !== 0; i--) {
//             //     stack.push(lastItem[i]);
//             // }
//
//             for (const item of lastItem) {
//                 stack.push(item);
//             }
//         } else {
//             result.push(lastItem);
//         }
//     }
//
//     return result.reverse();
// }

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];

console.dir(x, {depth: null});

console.log('---');

console.dir(flattenArr(x, 0), {depth: null}) // [1, [[2, [3, 4, [5]], 6], [7]], [8]]
console.dir(flattenArr(x, 2), {depth: null}) // [1, [2, [3, 4, [5]], 6], [7], 8]
console.dir(flattenArr(x, 2), {depth: null}) // [1, 2, [3, 4, [5]], 6, 7, 8]
console.dir(flattenArr(x, Infinity), {depth: null}) // [1, 2, 3, 4, 5, 6, 7, 8]
