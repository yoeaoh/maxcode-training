// https://maxcode.dev/problems/sort-the-odd/

function sortArray(array) {
    const oddIndexes = []
    const oddValues = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            oddIndexes.push(i);
            oddValues.push(array[i])
        }
    }

    const sortedOddValues = oddValues.sort((a, b) => a - b)

    const result = array;

    for (let i = 0; i < sortedOddValues.length; i++) {
        result[oddIndexes[i]] = sortedOddValues[i];
    }

    return result
}


console.log(sortArray([
        -19,
        16,
        -27,
        10,
        -18,
        -20,
        -31,
        -43,
        -44,
        13,
        -36,
        21,
        31,
        50,
        5,
        48,
        -18
    ]
)); // [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
