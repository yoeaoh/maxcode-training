// https://maxcode.dev/problems/object-get/

Object.prototype.get = function(complexKey) {
    const keys = complexKey.split('.');
    let currentObject = this;

    for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
            return currentObject[keys[i]];
        }

        if (currentObject?.[keys[i]] === undefined) {
            return undefined
        }

        currentObject = currentObject[keys[i]];
    }
};

const obj = {
    b: {
        x: 1,
    },
    a: {
        m: {
            n: {
                y: 8,
            },
        },
    },
};

console.log(obj.get("b"));   // { x: 1 }
console.log(obj.get("b.x")); // 1
console.log(obj.get("b.m")); // undefined
console.log(obj.get("b.q.w.e")); // undefined
