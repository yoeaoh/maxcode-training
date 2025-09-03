// https://maxcode.dev/problems/any/

// Что-то пошло не так.. попробовать другие подходы к поиску конца итератора
function any(iterable) {
    const iterator = iterable[Symbol.iterator]();

    let isDone = false;
    let index = 0;

    const errors = [];

    return new Promise((resolve, reject) => {
        while (!isDone) {
            const currentStep = iterator.next();

            if (currentStep.done) {
                isDone = true
            }

            const currentPromise = Promise.resolve(currentStep.value);
            const currentIndex = index;

            currentPromise.then(
                value => {
                    if (value) {
                        resolve(value);
                    } else {
                        throw new Error('END')
                    }
                },
                reason => {
                    errors[currentIndex] = reason;
                }
            ).catch(reason => {
                if (reason.message === 'END') {
                    return 'END'
                }
            }).then((value) => {
                if (value === 'END') {
                    reject({
                        message: 'All promises were rejected',
                        errors,
                    });
                }
            })

            index += 1;
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
