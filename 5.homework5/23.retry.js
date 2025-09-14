// https://maxcode.dev/problems/retry/

function withRetry(fn, limit) {
    let callsCount = 0;
    const errors = [];

    return function async (...args) {
        return new Promise(async (resolve, reject) => {
            const stack = [];
            stack.push(fn);

            while (stack.length > 0 && callsCount < limit) {
                const currentFn = stack.pop();

                console.log(currentFn);
                if (currentFn === undefined) {
                    reject(new AggregateError(errors, 'Too Many Calls'))
                }
                console.log('while');

                await currentFn(...args).then(
                    (value) => {
                        callsCount += 1;
                        resolve(value)
                    },
                    (reason) => {
                        callsCount += 1;
                        if (callsCount >= limit) {
                            reject(new AggregateError(errors, 'Too Many Calls'))
                        } else {
                            errors.push(reason);
                            stack.push(fn);
                        }
                    }
                )
            }
        })
    }
}

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                resolve(a + b);
            } else {
                reject("err");
            }
        }, 500);
    });
}

const enhancedSum = withRetry(sum, 4);

enhancedSum(3, 2).then(
    value => console.log(value),
    // 5 (с вероятностью 76%)
    reason => console.log(reason.errors),
    // ['err1', 'err2', 'err3', 'err4']
    // (с вероятностью 24%)
);
