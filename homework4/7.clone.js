// https://maxcode.dev/problems/clone/

function clone(obj) {

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

const obj2 = {
    a: 1,
};
obj2.b = obj2;

const obj2Copy = clone(obj2);

obj2Copy.b.b.b.b.b.b.b.a = 2;
console.log(obj2Copy.a); // 2
console.log(obj2.a);     // 1
