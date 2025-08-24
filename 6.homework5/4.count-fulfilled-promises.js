// https://maxcode.dev/problems/count-fulfilled-promises/

function countFulfilledPromises(...promises) {
    return promises.reduce((acc, promise) => {
        return promise
            .then(() => acc.then(prevValue => prevValue + 1))
            .catch(() => acc.then(prevValue => prevValue))
    }, new Promise(res => res(0)))
}

const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise((_, reject) => reject(3));


// Если запускать по отдельности, то всё окей, но если все сразу, то ломается, это окей?)
countFulfilledPromises().then(console.log);            // 0
countFulfilledPromises(p1).then(console.log);          // 1
countFulfilledPromises(p1, p2).then(console.log);      // 2
countFulfilledPromises(p1, p2, p3).then(console.log);  // 2
countFulfilledPromises(p1, p3).then(console.log);      // 1
countFulfilledPromises(p3).then(console.log);          // 0
