// https://maxcode.dev/problems/clone/

// TODO: Разобраться с циклическими ссылками

const isNotObject = (obj) =>
    obj === null
    || obj === undefined
    || Array.isArray(obj)
    || typeof obj === 'string'
    || typeof obj === 'number'
    || typeof obj === 'bigint';

function clone(obj) {
    const newObject = {};

    const keys = Object.keys(obj);

    for (const key of keys) {
        newObject[key] = isNotObject(obj[key]) ? obj[key] : clone(obj[key])
    }

    return newObject;
}

const obj = {
    x: 1,
    y: {
        z: 2,
        t: 3,
    },
};

const objCopy = clone(obj);
console.log(objCopy);

objCopy.y.z = 100;

console.log(objCopy.y.z); // 100
console.log(obj.y.z);     // 2

// const obj2 = {
//     a: 1,
// };
// obj2.b = obj2;
//
// const obj2Copy = clone(obj2);
//
// obj2Copy.b.b.b.b.b.b.b.a = 2;
// console.log(obj2Copy.a); // 2
// console.log(obj2.a);     // 1
