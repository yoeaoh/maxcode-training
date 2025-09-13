// https://maxcode.dev/problems/simple-all/

// function all(promises) {
//     return result = promises.reduce((acc, promise) => {
//         return promise.then((value) => acc.then(accValue => {
//             accValue.push(value)
//             return accValue
//         }))
//     }, new Promise(res => res([])))
// }

function all(promises) {
    
    return new Promise((res, rej) => {
        if (promises.length === 0) {
            return res([])
        }
        const result = []
        let resolvedPromises = 0;

        for (const [index, promise] of promises.entries()) {
            promise.then(value => {
                result[index] = value

                resolvedPromises += 1

                if (resolvedPromises === promises.length) {
                    res(result)
                }
            }, reason => rej(reason))
        }
    })
}

const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

p3.catch(() => { });

console.time("🙄");
// p1, p2, p3, p4
all([]).then(
    value => {
         console.log("1 >>>", value);
         console.timeEnd("🙄") 
    },
    reason => (console.log("2 >>>", reason), console.timeEnd("🙄")),
);
