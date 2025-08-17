// https://maxcode.dev/problems/deep-compare/

const isObject = (obj) => Object(obj) === obj;

function deepCompare(o1, o2) {
    if (!isObject(o1) || !isObject(o2)) {
        return o1 === o2;
    }

    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
        return false
    }

    return keys1.every((key) => Object.hasOwn(o2, key) && deepCompare(o1[key], o2[key]))
}

function deepCompareStack(o1, o2) {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
        return false
    }

    if (!isObject(o1) || !isObject(o2)) {
        return o1 === o2;
    }

    const stack = [];
    stack.push(keys1);

    while (stack.length > 0) {
        const lastKey = stack.pop();

        if (!Object.hasOwn(o2, lastKey)) {
            return false;
        }

        if ()
    }

    Object.hasOwn(o2, key) && deepCompare(o1[key], o2[key])
}

const o1 = {
    x: 1,
    y: {
        z: "qwe",
        m: {
            t: false,
        }
    },
};

const o2 = {
    x: 1,
    y: {
        z: "zxc",
        m: {
            t: false,
        }
    },
};

console.log(deepCompare(o1, o2)); // true
