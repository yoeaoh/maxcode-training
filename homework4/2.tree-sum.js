// https://maxcode.dev/problems/tree-sum/

function sumTheTreeValues(root) {
    let currentSum = root.value;

    if (root.left !== null) {
        currentSum = currentSum + sumTheTreeValues(root.left);
    }

    if (root.right !== null) {
        currentSum = currentSum + sumTheTreeValues(root.right);
    }

    return currentSum;
}

const root = {
    value: 3,
    left: {
        value: 5,
        left: {
            value: 1,
            left: null,
            right: null,
        },
        right: null,
    },
    right: {
        value: 2,
        left: null,
        right: {
            value: 8,
            left: null,
            right: null,
        },
    },
};

console.log(sumTheTreeValues(root)); // 19
