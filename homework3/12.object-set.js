// https://maxcode.dev/problems/object-set/

Object.prototype.set = function(keysString, value) {
    const keys = keysString.split('.');
    const lastIndex = keys.length - 1;

    let currentObject = this;

    for (let i = 0; i < keys.length; i++) {
        if (i === lastIndex) {
            currentObject[keys[i]] = value;
        }

        if (!Object.hasOwn(currentObject, keys[i])) {
            currentObject[keys[i]] = {};
        }

        currentObject = currentObject[keys[i]];
    }

    // this[keys[0]][keys[1]][keys[2]] = value;
};

const obj1 = {
    a: {
        b: {
            x: 1,
        },
    },
};

obj1.set("a.b.y", 6);
console.log(obj1);

// obj1 === {
//   a: {
//     b: {
//       x: 1,
//       y: 6,
//     },
//   },
// };

const obj2 = {
    a: {
        b: {
            x: 1,
        },
    },
};

obj2.set("a.b", 7);
console.log(obj2)
// obj2 === {
//   a: {
//     b: 7,
//   },
// };

const obj3 = {
    a: {
        b: {
            x: 1,
        },
    },
};

obj3.set("a.m.n.y", 8);
console.dir(obj3, {depth: null})
// obj3 === {
//   a: {
//     b: {
//       x: 1,
//     },
//     m: {
//       n: {
//         y: 8,
//       },
//     },
//   },
// };
