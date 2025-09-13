// https://maxcode.dev/problems/array-from/

Array.from2 = function(iterable, cb, thisArg) {
    const context = thisArg !== undefined ? thisArg : iterable;
    const result = [];

    
    if (context[Symbol.iterator] !== undefined) {
        for (const item of iterable) {
            const currentItem = cb !== undefined ? cb(item) : item;

            result.push(currentItem);
        }
    }

    if (Object.hasOwn(context, this.length)) {
        const keys = Object.keys(context);

        const hasIndexes = keys.every(key => typeof key === "number");

        if (hasIndexes) {
            for (const key of keys) {
                result[key] = context[key];
            }
        }
    }

    return result;
};

const map = new Map();
map.set(1, "a");
map.set(2, "b");

console.log(Array.from2(map)); // [[1, "a"], [2, "b"]]

const obj = {0: "x", 1: "y", length: 2};

console.log(Array.from2(obj)); // ["x", "y"]

