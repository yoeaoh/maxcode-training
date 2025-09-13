// https://maxcode.dev/problems/deep-compare/

const isObject = (obj) => Object(obj) === obj;

function deepCompare(o1, o2) {
    const stack = [[o1, o2]];

    while (stack.length > 0) {
        const [a, b] = stack.pop();

        if (!isObject(a) || !isObject(b)) {
            if (a === b) {
                continue;
            }
            return false
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);

        if (aKeys.length !== bKeys.length) {
            return false
        }

        for(const key of aKeys) {
            if (!Object.hasOwn(b, key)) {
                return false;
            }
            stack.push([a[key], b[key]]);
        }
    }

    return true;
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
