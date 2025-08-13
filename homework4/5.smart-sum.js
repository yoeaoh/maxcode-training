// https://maxcode.dev/problems/smart-sum/

function smartSum(arr) {
    let sum = 0;

    for (const item of arr) {
        // const increment = Array.isArray(item) ? smartSum(item) : item;

        sum += Array.isArray(item) ? smartSum(item) : item;
    }

    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //         sum += smartSum(arr[i]);
    //
    //         continue;
    //     }
    //
    //     sum += arr[i];
    // }

    return sum;
}

const arr = [1, [2, [[3, [4]], 5, 6], 7], [[[8]]]];

console.log(smartSum(arr)); // 36
