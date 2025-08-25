// https://maxcode.dev/problems/any/

// TODO: Придумать, как обрабатывать не только
//  массивы (т.к. у других iterable нет length)
function any(iterable) {
    return new Promise((res, rej) => {
        const errors = []
        let rejectedCount = 0

        for (const item of iterable) {
            item
                .then((value) => {
                    res(value)
                })
                .catch((reason) => {
                    rejectedCount++
                    errors.push(reason)

                    if (iterable.length === rejectedCount) {
                        rej({
                            errors,
                            message: 'All promises were rejected',
                        })
                    }
                })
        }
    })
}

const rand = () => Math.random() * 2000;

// const p1 = new Promise(r => setTimeout(r, rand(), "A"));
// const p2 = new Promise(r => setTimeout(r, rand(), "B"));
// const p3 = new Promise(r => setTimeout(r, rand(), "C"));
// const p4 = new Promise(r => setTimeout(r, rand(), "D"));

const p1 = Promise.reject("A");
const p2 = Promise.reject("B");
const p3 = Promise.reject("C");
const p4 = Promise.reject("D");

any([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
