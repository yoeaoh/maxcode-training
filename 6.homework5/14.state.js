// https://maxcode.dev/problems/state/

function getState(promise) {
    const competingPendingPromise = Promise.resolve();
    const realPromiseStatus = promise.then(() => 'fulfilled', () => 'rejected');
    const competingPendingPromiseStatus = competingPendingPromise.then(() => 'pending');

    return new Promise(resolve => {
        realPromiseStatus.then(resolve);
        competingPendingPromiseStatus.then(resolve);
    })
}

const p1 = Promise.resolve();
getState(p1).then(actual => {
    console.log({ actual, expected: "fulfilled" });
});

const p2 = Promise.reject();
getState(p2).then(actual => {
    console.log({ actual, expected: "rejected" });
});

const p3 = new Promise(() => {});
getState(p3).then(actual => {
    console.log({ actual, expected: "pending" });
});

// Промис резолвится через 2 секунды
const p = new Promise(resolve => {
    setTimeout(() => resolve("xxx"), 2000);
});

// Через 1 секунду функция говорит, что он pending
setTimeout(() => {
    getState(p).then(status => console.log(status)); // "pending"
}, 1000);

// Через 3 секунды тот же промис уже fulfilled
setTimeout(() => {
    getState(p).then(status => console.log(status)); // "fulfilled"
}, 3000);
