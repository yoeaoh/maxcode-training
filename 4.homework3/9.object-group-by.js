// https://maxcode.dev/problems/object-group-by/

function groupBy(iterable, cb) {
    const result = Object.create(null);
    let index = 0;

    for (const item of iterable) {
        const key = cb(item, index);
        index += 1;

        // if (!Object.hasOwn(result, key)) {
        //     result[key] = []
        // }
        
        result[key] ??= []
        result[key].push(item);
    }

    return result;
}

const o2 = {
    a: 2,
    b: 2,
    // __proto__: Object.prototype,
}

const o1 = {
    a: 1,
    __proto__: o2,
}

console.log(o1.a);
console.log(o1.b);
console.log(o1.toString);



// const x = groupBy(
//     [1, 4, 123, 44444, 88888, 12345],
//     x => x.toString().length,
// );

// console.log(x.constructor === undefined);
// console.log(x);


// const result = {
//     "1": [1, 4],
//     "3": [123],
//     "5": [44444, 88888, 12345],
// };
