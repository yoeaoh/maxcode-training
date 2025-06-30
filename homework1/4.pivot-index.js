// https://maxcode.dev/problems/pivot-index/

// space O(1)
// time  O(n)

function pivotIndex(arr) {
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0)
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const rightSum = totalSum - arr[i] - leftSum;

        if (rightSum === leftSum) return i;

        leftSum += arr[i];
    }

    return -1;
}

const arr1 = [4, 2, 1, 3, 7, 6, 4];
console.log(pivotIndex(arr1) === 4);

const arr2 = [4, 2, -5, 3];
console.log(pivotIndex(arr2) === 0);
console.log(pivotIndex([4, 2, 1, 3, 7, 6, 4]))

