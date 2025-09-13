// https://maxcode.dev/problems/smart-sum/

function smartSum(arr) {
    let sum = 0;

    for (const item of arr) {
        sum += Array.isArray(item) ? smartSum(item) : item;
    }

    return sum;
}

function smartSumStack(arr) {
    const stack = [];
    let result = 0;

    stack.push(arr);

    while (stack.length > 0) {
        const lastItem = stack.pop();
        
        if (Array.isArray(lastItem)) {
            for (const item of lastItem) {
                stack.push(item);
            } 
            // stack.push(...lastItem);
        } else {
            result += lastItem;
        }
    }

    return result;
}

// const a = [[1], 2, [[[3, [4]]], 5, [6], 7, 8], 9];

// const stack = [
//     [1], 2, [3, [4]]
// ];



// sum ← 9 +  8 + 7 + 6 + 5

// pop()
// push(val)
// isEmpty()  // length === 0

// top()      // at(-1)

// const arr = [1, [2, [[3, [4]], 5, 6], 7], [[[8]]]];

// console.log(smartSum(arr)); // 36


let a = 1;

for(let i = 0; i < 20_000; i++) {
    a = [a];
}

a = Array(200_000).fill(1)

console.log(smartSum(a));
