// https://maxcode.dev/problems/object-get/

Object.prototype.get = function(complexKey) {
    const keys = complexKey.split('.');
    let currentObject = this;

    for (const key of keys) {
        if (currentObject === undefined) {
            return undefined
        }
        
        currentObject = currentObject[key];
    }
    
    return currentObject;
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
