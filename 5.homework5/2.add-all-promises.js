// https://maxcode.dev/problems/add-all-promises/

// function sum(...promises) {
//     return promises.reduce((acc, promise) => {
//         return promise.then((value) => acc.then(accValue => accValue + value))
//     }, Promise.resolve(0))
// }

// async function sum(...promises) {
//     let s = 0;
//     for(const p of promises) {
//         s += await p;
//     }
//     return s;
// }

function sum(...promises) {
    if (promises.length = 0) {
        return Promise.resolve(0)
    }

    const [currentPromise, ...nextPromises] = promises

    return currentPromise.then((value) => sum(...nextPromises).then(accValue => accValue + value))
}

const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise(resolve => resolve(3));

sum().then(console.log);            // 0
sum(p1).then(console.log);          // 1
sum(p1, p2).then(console.log);      // 3
sum(p1, p2, p3).then(console.log);  // 6
