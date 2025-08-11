// https://maxcode.dev/problems/tree-max-path/

// [x] Почти получилось, нужны доработки по тестам
// [x] Нужно всегда доходить до конца и сравнивать только листья.

// DONE. Но нужно отрефакторить ифы.

function maxSum(root) {
    if (root === null || root === undefined) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return root.value;
    }

    let leftSum = 0;
    let rightSum = 0;

    if (root.left === null && root.right !== null) {
        rightSum = root.value + maxSum(root.right);

        return rightSum;
    }

    if (root.right === null && root.left !== null) {
        leftSum = root.value + maxSum(root.left);

        return leftSum;
    }

    if (root.left !== null) {
        leftSum = root.value + maxSum(root.left);
    }

    if (root.right !== null) {
        rightSum = root.value + maxSum(root.right);
    }

    return Math.max(leftSum, rightSum);
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

const root2 = {
    "value": 5,
    "left": {
        "value": 4,
        "left": {
            "value": -80,
            "left": null,
            "right": null
        },
        "right": {
            "value": -60,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 10,
        "left": {
            "value": -90,
            "left": null,
            "right": null
        },
        "right": null
    }
}

console.log(maxSum(root2));

const root3 = {
    "value": 42,
    "left": null,
    "right": {
        "value": -70,
        "left": {
            "value": -53,
            "left": null,
            "right": null
        },
        "right": null
    }
}

console.log(maxSum(root3));

const root4 = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 3,
        "left": null,
        "right": null
    }
}

console.log(maxSum(root4));
