// https://maxcode.dev/problems/promise-logic/

// v1
function and1(p1, p2) {
    return p1.then(() => new Promise(res => res(p2))).catch(() => new Promise((_, rej) => rej(p2)));
}

[{price: "100"}, {price: "200"}]
    .map(obj => obj.price)
    .map(str => Number(str));

[{price: "100"}, {price: "200"}]
    .map(obj => Number(obj.price))

// v2
function and(p1, p2) {
    return new Promise((res, rej) => {
        // p1.then(() => res(p2), () => rej())
        // p2.then(() => res(p1), () => rej())

        let anotherPromiseWasFulfilled = false;

        p1.then(() => {
            if (anotherPromiseWasFulfilled) {
                res();
            }
            anotherPromiseWasFulfilled = true;
        }, () => rej());

        p2.then(() => {
            if (anotherPromiseWasFulfilled) {
                res();
            }
            anotherPromiseWasFulfilled = true;
        }, () => rej());
    })
}

const p1 = new Promise(resolve => setTimeout(resolve, 2000));
const p2 = new Promise((_, reject) => setTimeout(reject, 1000));

p2.catch(() => {});

console.time("🐙");

const p11 = and(p1, p2)
p11.catch(() => {});

// setTimeout(() => {
//     console.log(p11);
// }, 3000);

p1.then(
    () => (console.log("fulfulled"), console.timeEnd("🐙")),
    (x) => (console.log("rejected",_x = x), console.timeEnd("🐙")),
)

// https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

const p = new Promise(res => {
    res(new Promise(resolve => setTimeout(resolve, 2000)));
})

const pp = Promise.resolve().then(() => new Promise(resolve => setTimeout(resolve, 2000)));

// const p1 = Promise.reject(100);

// p1.then(x => x * 2, x => { throw x; }).catch(x => x * 3);
// p1.then(x => x * 2, x => x * 3);

// and(Promise.resolve(1), Promise.resolve(2)).then(
//     () => console.log("fulfulled"), // ✓
//     () => console.log("rejected"),
// )

// and(Promise.reject(1), Promise.resolve(2)).then(
//     () => console.log("fulfulled"),
//     () => console.log("rejected"),  // ✓
// )
