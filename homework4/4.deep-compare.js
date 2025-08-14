// https://maxcode.dev/problems/deep-compare/

const isNotObject = (obj) => Object(obj) !== obj;

function deepCompare(o1, o2) {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (!Object.hasOwn(o2, key)) {
            return false;
        }

        if (isNotObject(o1[key]) || isNotObject(o2[key])) {
            if (o1[key] !== o2[key]) {
                return false;
            }

            continue;
        }

        if (deepCompare(o1[key], o2[key]) === false) {
            return false;
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
