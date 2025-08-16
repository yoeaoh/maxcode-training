// https://maxcode.dev/problems/max-depth/

const isObject = (obj) => Object(obj) === obj;

function depth(obj) {
    if (!isObject(obj)) {
        return 0;
    }

    const values = Object.values(obj);

    if (values.length === 0) {
        return 0;
    }

    const depths = values.map(depth);
    const maxDepth = Math.max(...depths);

    return maxDepth + 1;

    // let maxDepth = 0;
    // for (const key in obj) {
    //     maxDepth = Math.max(depth(obj[key]) + 1, maxDepth);
    // }

    // return maxDepth;
}

const obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
    e: {
        f: {
            g: 4,
            h: 5,
        },
    },
    i: 6,
};

const obj1 = {
    "a": {
        "d": 6,
        "f": 1,
        "i": {
            "u": 44
        }
    },
    "m": 9,
    "b": {
        "k": {},
        "c": 2
    },
    "w": 2
}

const obj2 = {
    "a": {
        "d": 6,
        "v": {
            "v": 6
        },
        "f": 1,
        "i": {
            "p": {
                "r": 47,
                "q": 25
            },
            "u": 44
        }
    },
    "x": {
        "y": 22
    },
    "m": 9,
    "b": {
        "t": {
            "s": 7
        },
        "c": 2
    },
    "w": 2
}

// обратились три раза и дошли до примитива:
// obj.e.f.g
console.log(depth(obj)); // 3

console.log(depth(obj1)); // 3
console.log(depth(obj2)); // 4
