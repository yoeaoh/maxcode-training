// https://maxcode.dev/problems/all/

// TODO: not working with set, empty set, rejected promises
//  (should return one-item array with first rejected promise)
//  also should work with not-promises (strings, etc.)
function all(promises) {
    return new Promise((res, rej) => {
        const result = promises.reduce((acc, promise) => {
            return promise
                .then(
                    (value) => acc.then(accValue => {
                        accValue.push(value)
                        return accValue
                    }),
                    reason => rej([reason])
                )
        }, new Promise(res => res([])))

        res(result)
    })
}

const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

all([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
