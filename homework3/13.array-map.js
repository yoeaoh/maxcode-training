// https://maxcode.dev/problems/array-map/

// не прошло тест

// 06
// Массив с дырками
// const a = Array(5);
// a[2] = 2;
// const b = a.map2(x => x * 2);
// console.log(0 in b); // false

Array.prototype.map2 = function (cb, thisArg) {
    const result = [];
    const context = arguments.length === 2 ? thisArg : this;

    for (let i = 0; i < this.length; i++) {
        result.push(cb.call(context, this[i], i, this));
    }

    return result
}

console.log([1, 2, 3].map2(x => x ** 2));
// [1, 4, 9]

console.log(["a", "b", "c", "d"].map2((x, i) => x.repeat(i)));
// ["", "b", "cc", "ddd"]


const multiplicator = {
    x: 5,
    multiply(num) {
        return num * this.x;
    },
};

console.log([1, 2, 3].map2(multiplicator.multiply));
// [NaN, NaN, NaN]

console.log([1, 2, 3].map2(multiplicator.multiply, multiplicator));
// [5, 10, 15]
