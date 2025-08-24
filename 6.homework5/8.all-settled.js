// https://maxcode.dev/problems/all-settled/

// TODO: Almost done, but need to support Set, strings etc.
function allSettled(iterable) {
    return iterable.reduce((acc, promise) => {
        return promise
            .then(value => acc.then(accValue => {
                accValue.push({status: 'fulfilled', value})
                return accValue
            }))
            .catch(reason => acc.then(accValue => {
                accValue.push({status: 'rejected', reason})
                return accValue
            }))
    }, new Promise(res => res([])))
}

const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

allSettled([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
