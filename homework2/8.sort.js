// https://maxcode.dev/problems/sort/

function sort(arr, compareFn) {

}

// https://www.youtube.com/playlist?list=PLjdNQx7uURWzJEZQ5FxkB9DGB3YuCr1Xk

const arr1 = ["zer", "abc", "a", "xxyyzz", "bz"];
//           ["a", "abc", "zer", "xxyyzz", "bz"];
//           ["a", "bz", "zer", "xxyyzz", "abc"];

sort(arr1);
console.log(arr1); // ["a", "abc", "bz", "xxyyzz", "zer"]

const arr2 = [12, 5, 1, 3, 23];
sort(arr2);

console.log(arr2); // [1, 12, 23, 3, 5]

const arr3 = ["zerp", "abc", "a", "xxyyzz", "bz"];
sort(arr3, (a, b) => b.length - a.length);

console.log(arr3); // ["xxyyzz", "zerp", "abc", "bz", "a"]
