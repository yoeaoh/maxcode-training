// https://maxcode.dev/problems/clone/

const isObject = (obj) => Object(obj) !== obj;

const log = (message) => {
    console.dir(message, {depth: null})
}

function clone(obj) {
    const stack = []
    const result = []

    stack.push(obj)

    while (stack.length > 0) {
        const lastItem = Object.entries(stack.pop())

        if (Array.isArray(lastItem) && lastItem.length > 2) {
            for (const innerItem of lastItem) {
                stack.push(innerItem)
            }
        } else {
            result.push(lastItem)
        }

        stack.length = 0
    }

    log(result)

    return Object.fromEntries(result)
}

const obj = {
    x: 1,
    y: {
        z: 2,
        t: 3,
    },
};

const objCopy = clone(obj);
// console.log(objCopy);
//
// objCopy.y.z = 100;
//
// console.log(objCopy.y.z); // 100
// console.log(obj.y.z);     // 2
//
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
