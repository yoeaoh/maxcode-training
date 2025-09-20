// https://maxcode.dev/problems/retry/

function withRetry(fn, limit) {
    const retry = function(...args) {
        const errors = [];

        return function() {
            return fn(...args).then(
                (value) => {
                    return value;
                }, 
                (reason) => {
                    errors.push(reason);

                    if (errors.length === limit) {
                        return errors;
                    } else {
                        return retry(...args);
                    }
                }
            )
        }
    }

    return retry;
}

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                // console.log("✅")
                resolve(a + b);
            } else {
                // console.log("💔")
                reject("err");
            }
        }, 500);
    });
}

const enhancedSum = withRetry(sum, 3);

// 30% успеха с первой попытки

// за 3 попытки ??% успеха?

let ok = 0;
let notOk = 0;

for(let i = 0; i < 10_000; i++) {
    enhancedSum(1, 2).then(() => ok++, () => notOk++)
}

setTimeout(() => {
    console.log({ ok, notOk });
}, 5000);

// enhancedSum(3, 2).then(
//     value => console.log(value),
//     // 5 (с вероятностью 76%)
//     reason => console.log(reason.errors),
//     // ['err1', 'err2', 'err3', 'err4']
//     // (с вероятностью 24%)
// );

// setTimeout(() => {
//     enhancedSum(3, 2).then(
//     value => console.log(value),
//     // 5 (с вероятностью 76%)
//     reason => console.log(reason.errors),
//     // ['err1', 'err2', 'err3', 'err4']
//     // (с вероятностью 24%)
// );
// }, 3000);