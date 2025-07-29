// https://maxcode.dev/problems/object-set/

// Object.prototype.set = function(keysString, value) {
//     const keys = keysString.split('.');

//     let currentObject = this;

//     for (let i = 0; i < keys.length - 1; i++) {
//         currentObject[keys[i]] ??= {};
//         currentObject = currentObject[keys[i]];
//     }
    
//     currentObject[keys.at(-1)] = value;

//     // this[keys[0]][keys[1]][keys[2]] = value;
// };

Object.prototype.set = function(keysString, value) {
    const [currentKey, ...keys] = keysString.split('.');

    if (keys.length === 0) {
        this[currentKey] = value;
        return;
    }

    const nextKeys = keys.join('.');
    this.set(nextKeys, value);
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
