// https://maxcode.dev/problems/pivot-index/

function pivotIndex(arr) {
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0)
    let leftSum = 0;
    let rightSum = totalSum;

    for (let i = 0; i < arr.length; i++) {
        rightSum = rightSum - arr[i];

        if (rightSum === leftSum) return i;

        leftSum = arr[i] + leftSum;
    }

    return -1;
}

const arr1 = [4, 2, 1, 3, 7, 6, 4];
console.log(pivotIndex(arr1) === 4);

const arr2 = [4, 2, -5, 3];
console.log(pivotIndex(arr2) === 0);
console.log(pivotIndex([4, 2, 1, 3, 7, 6, 4]))

