// https://maxcode.dev/problems/count-fulfilled-promises/

function countFulfilledPromises(...promises) {
    return promises.reduce((acc, promise) => {
        return promise
            .then(() => acc.then(prevValue => prevValue + 1))
            .catch(() => acc.then(prevValue => prevValue))
    }, Promise.resolve(0))
}

const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
// Если запустить код, в котором будет эта строка (14) и строка (20)
// const p3 = new Promise((_, reject) => reject(3));

// countFulfilledPromises().then(console.log);            // 0
// countFulfilledPromises(p1).then(console.log);          // 1

// И эта строка (20) -- то он крашится.. если закомментить строку 14, то всё окей.
countFulfilledPromises(p1, p2).then(console.log);      // 2

// countFulfilledPromises(p1, p2, p3).then(console.log);  // 2
// countFulfilledPromises(p1, p3).then(console.log);      // 1
// countFulfilledPromises(p3).then(console.log);          // 0
