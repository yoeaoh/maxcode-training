// https://maxcode.dev/problems/max-depth/

// function depth(obj, currentDepth = 0) {
//     let result = currentDepth;
//     console.log(obj, currentDepth);

//     if (typeof obj !== 'object') {
//         return result;
//     }

//     const keys = Object.keys(obj);

//     keys.forEach(key => {
//         if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
//             result = Math.max(depth(obj[key], result + 1));
//         }
//     })

//     return result;
// }

const isNotObject = (obj) => 
       obj === null 
    || obj === undefined 
    || Array.isArray(obj) 
    || typeof obj === 'string' 
    || typeof obj === 'number';


function depth(obj, currentDepth = 0) {
    let maxDepth = currentDepth;

    if (isNotObject(obj)) {
        return maxDepth;
    }

    const keys = Object.keys(obj);

    for (const key of keys) {
        const newDepth = currentDepth + 1;

        maxDepth = Math.max(depth(obj[key], newDepth), maxDepth);
    }

    return maxDepth;
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
