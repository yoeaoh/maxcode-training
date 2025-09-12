// https://maxcode.dev/problems/compose-async/

// Это чёт не проходит, хотя вроде мапу добавил

// 04. Для одинакового аргумента функция возвращает один и тот же ответ
//     Promise resolution is still pending but the event loop has already resolved

function compose(fns) {
    const functionsCount = fns.length;
    let composedFns = 0;

    const resultsMap = new Map()

    return function(initialValue) {
        return new Promise((resolve, reject) => {
            if (functionsCount === 0) {
                resolve(initialValue);
            }

            return fns.reduceRight((acc, fn) => {
                return acc.then(accValue => {
                    console.log(resultsMap)

                    if (resultsMap.has(fn)) {
                        if (resultsMap.get(fn)[accValue]) {
                            return Promise.resolve(resultsMap.get(fn)[accValue])
                        }
                    }

                    return fn(accValue).then(
                            value => {
                                resultsMap.set(fn, {[accValue]: value})

                                composedFns += 1;

                                if (composedFns === functionsCount) {
                                    resolve(value);
                                }

                                return value
                            })
                    },
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
