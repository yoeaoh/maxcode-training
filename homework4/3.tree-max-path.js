// https://maxcode.dev/problems/tree-max-path/

function maxSum(root) {

}

const root = {
    value: 1, // ←
    left: {
        value: 5,
        left: {
            value: 1,
            left: null,
            right: null,
        },
        right: {
            value: 3,
            left: null,
            right: null,
        },
    },
    right: {
        value: 2, // ←
        left: {
            value: 8,
            left: null,
            right: null,
        },
        right: {
            value: 9, // ←
            left: null,
            right: null,
        },
    },
};

console.log(maxSum(root)); // 1 + 2 + 9 === 12
