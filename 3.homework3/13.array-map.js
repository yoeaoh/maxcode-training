// https://maxcode.dev/problems/array-map/

// не прошло тест

// 06
// Массив с дырками
// const a = Array(5);
// a[2] = 2;
// const b = a.map2(x => x * 2);
// console.log(0 in b); // false

// realm

if (Array.prototype.map2 === undefined) {
    Object.defineProperty(Array.prototype, "map2", {
        value: function (cb, thisArg) {
            const length = this.length
            const constructor = Array.isArray(this) ? this.constructor : Array;
            const result = new constructor(length);

            for (let i = 0; i < length; i++) {
                if (i in this) {
                    result[i] = cb.call(thisArg, this[i], i, this);
                }
            }

            return result
        }
    });
}

class Stack extends Array {
    top() {
        return this.at(-1);
    }
    isEmpty() {
        return this.length === 0;
    }
}

const a = [0, 1, 2, 3, 4, 5, undefined];
a.length = 8;
delete a[2];
delete a[4];

console.log(a);
console.log(a.map(x => {
    a.push(0);
    return x ** 2
}));
console.log(a);

console.log(a.map2(x => x ** 2));


// const s1 = new Stack();
// s1.push(1)
// s1.push(2)
// s1.push(3)

// // console.log(s1.map(x => x ** 2) instanceof Stack);
// // console.log(s1.map2(x => x ** 2) instanceof Stack);

// console.log([1,2,3].map2(x => x ** 2));
// console.log(s1.map2(x => x ** 2));
// console.log([].map2.call("qwe", x => x.toUpperCase()));
// console.log([].map2.call({0: "a", 1: "b", length: 2}, x => x.toUpperCase()));


// console.log([1, 2, 3].map2(x => x ** 2));
// // [1, 4, 9]

// console.log(["a", "b", "c", "d"].map2((x, i) => x.repeat(i)));
// // ["", "b", "cc", "ddd"]


// const multiplicator = {
//     x: 5,
//     multiply(num) {
//         return num * this.x;
//     },
// };

// console.log([1, 2, 3].map2(multiplicator.multiply));
// // [NaN, NaN, NaN]

// console.log([1, 2, 3].map2(multiplicator.multiply, multiplicator));
// // [5, 10, 15]
