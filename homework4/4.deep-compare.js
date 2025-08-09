// https://maxcode.dev/problems/deep-compare/

function deepCompare(o1, o2) {

}

const o1 = {
    x: 1,
    y: {
        z: "qwe",
        m: {
            t: false,
        }
    },
};

const o2 = {
    x: 1,
    y: {
        z: "qwe",
        m: {
            t: false,
        }
    },
};

console.log(deepCompare(o1, o2)); // true
