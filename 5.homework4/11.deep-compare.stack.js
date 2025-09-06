// https://maxcode.dev/problems/deep-compare/

const isObject = (obj) => Object(obj) === obj;

function deepCompare(o1, o2) {
    const stack1 = [];
    const stack2 = [];

    stack1.push(Object.entries(o1));
    stack2.push(Object.entries(o2));

    while (stack1.length > 0 && stack2.length > 0) {
        const stackOneCurrentItem = stack1.pop();
        const stackTwoCurrentItem = stack2.pop();

        if (isObject(stackOneCurrentItem) && isObject(stackTwoCurrentItem)) {
            
        }
    }
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
        z: "zxc",
        m: {
            t: false,
        }
    },
};

console.log(deepCompare(o1, o2)); // true
