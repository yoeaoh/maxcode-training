// https://maxcode.dev/problems/simple-all/

function all(promises) {
    return result = promises.reduce((acc, promise) => {
        return promise.then((value) => acc.then(accValue => {
            accValue.push(value)
            return accValue
        }))
    }, new Promise(res => res([])))
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
