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



// const p0 = Promise.resolve()
// const p0 = new Promise(() => {})
// const p1 = p0.then(() => console.log(3))
// const p2 = p1.then(() => console.log(4))
// const p3 = p2.then(() => console.log(5))

// const a0 = [1,2,3].values()
// const a1 = a0.map(x => x * 2)
// const a2 = a1.map(x => { throw x * 3})
// const a3 = a2.map(x => x * 4)

// a3.toArray();
