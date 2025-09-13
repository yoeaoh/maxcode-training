// https://maxcode.dev/problems/compose-async/

function compose(fns) {
    const functionsCount = fns.length;
    let composedFns = 0;

    const resultsMap = new Map();

    return function(initialValue) {
        if (resultsMap.has(fns)) {
            if (resultsMap.get(fns)[initialValue] !== undefined) {
                return resultsMap.get(fns)[initialValue];
            }
        }

        return new Promise((resolve, reject) => {
            if (functionsCount === 0) {
                resolve(initialValue);
            }

            return fns.reduceRight((acc, fn) => {
                return acc.then(accValue => fn(accValue).then(
                    value => {
                        resultsMap.set(fn, {accValue: value})

                        composedFns += 1;

                        if (composedFns === functionsCount) {
                            resultsMap.set(fns, {[initialValue]: value});
                            resolve(value);
                        }

                        return value
                    }),
                    reason => reject(reason)
                )
            }, Promise.resolve(initialValue))
        })
    }
}

const square = x => new Promise(r => setTimeout(r, 2000, x ** 2));
const divideBy5 = x => new Promise(r => setTimeout(r, 1500, x / 5));
const multiplyBy3 = x => new Promise(r => setTimeout(r, 500, x * 3));

const foo = compose([square, divideBy5, multiplyBy3]);

console.time("xxx");
foo(10).then(value => {
    console.log(value);
    console.timeEnd("xxx");
});
