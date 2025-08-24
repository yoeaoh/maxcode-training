// https://maxcode.dev/problems/sort/

function sort(arr, compareFn) {
    let comparator = compareFn;

    const defaultComparator = (a, b) => {
        const aString = a.toString();
        const bString = b.toString();

        if (aString > bString) return 1;
        if (bString > aString) return -1;
        return 0;
    };

    if (arguments.length < 2) {
        comparator = defaultComparator;
    }

    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let min = i;

        for (let j = i + 1; j < l; j++) {
            if (comparator(arr[min], arr[j]) > 0) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

}

// https://www.youtube.com/playlist?list=PLjdNQx7uURWzJEZQ5FxkB9DGB3YuCr1Xk

const arr1 = ["zer", "abc", "a", "xxyyzz", "bz"];
sort(arr1);
console.log(arr1); // ["a", "abc", "bz", "xxyyzz", "zer"]

const arr2 = [12, 5, 1, 3, 23];
sort(arr2);
console.log(arr2); // [1, 12, 23, 3, 5]

const arr3 = ["zerp", "abc", "a", "xxyyzz", "bz"];
sort(arr3, (a, b) => b.length - a.length);
console.log(arr3); // ["xxyyzz", "zerp", "abc", "bz", "a"]
