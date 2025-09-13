// https://maxcode.dev/problems/homogenous-arrays/

function isHomogenous(arr) {
    return arr.every((item) => typeof item === typeof arr[0]);

    // for (const item of arr) {
    //     if (typeof item === typeof arr[0]) {
    //         return false;
    //     }
    // }

    // return true;
}

// isHomogenous([1,2,3,4]) === true
// isHomogenous([1,"aa","bb",4]) === false

function filterHomogenous(arrays) {
    return arrays.filter((array) => isHomogenous(array) && array.length !== 0);
}

console.log(filterHomogenous([
    [1, 2, 3],
    [],
    [5, true, 8],
    ["qwe", "yyy"],
    ["uio", 6],
])); // [[1, 2, 3],  ["qwe", "yyy"]]