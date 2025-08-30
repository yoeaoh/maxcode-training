// https://maxcode.dev/problems/race/

function race(iterable) {
    return new Promise((res, rej) => {
        for (const item of iterable) {
            const promise = Promise.resolve(item);
            promise.then(res, rej);
            // if (item?.then) {
            //     item.then(res, rej);
            // } else {
            //     queueMicrotask(() => {
            //         res(item)
            //     })
            // }
        }
    })
}

// const rand = () => Math.random() * 2000;

// const p1 = new Promise(r => setTimeout(r, rand(), "A"));
// const p2 = new Promise(r => setTimeout(r, rand(), "B"));
// const p3 = new Promise(r => setTimeout(r, rand(), "C"));
// const p4 = new Promise(r => setTimeout(r, rand(), "D"));

// race([p1, p2, p3, p4]).then(
//     value => console.log("1 >>>", value),
//     reason => console.log("2 >>>", reason),
// );

Promise.race([1,2,3]).then(console.log);
queueMicrotask(() => console.log("microtask"));