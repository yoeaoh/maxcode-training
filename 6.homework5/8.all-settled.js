// https://maxcode.dev/problems/all-settled/

function allSettled(iterable) {

}

const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

allSettled([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
