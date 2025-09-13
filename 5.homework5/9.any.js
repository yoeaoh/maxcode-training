// https://maxcode.dev/problems/any/

function any(iterable) {
    const errors = [];
    let pendingCounter = 0;
    let errorsCounter = 0;

    return new Promise((resolve, reject) => {
        for (const item of iterable) {
            const index = pendingCounter;

            Promise.resolve(item).then(
                value => resolve(value),
                reason => {
                    errorsCounter += 1;

                    errors[index] = reason;

                    console.log(errorsCounter, pendingCounter);

                    if (errorsCounter === pendingCounter) {
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                },
            )

            pendingCounter += 1;
        }

        if (pendingCounter === 0) {
            reject(new AggregateError(errors, "All promises were rejected"))
        }
    })
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/any


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
