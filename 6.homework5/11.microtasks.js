// https://maxcode.dev/problems/microtasks/

// С первой попытки, я не тупой!
function solution() {
    return [0, 1, 3, 2, 4, 5];
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
