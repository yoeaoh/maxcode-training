// https://maxcode.dev/problems/microtasks/

function solution() {
    return [];
}

Promise.resolve()
    .then(() => console.log(0));

Promise.resolve()
    .then(() => console.log(1))
    .then(() => console.log(2));

Promise.resolve()
    .then(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5));
