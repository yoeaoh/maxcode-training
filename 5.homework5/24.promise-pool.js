// https://maxcode.dev/problems/promise-pool/

function run(fns, limit) {
    const pool = new Map();
    const result = [];

    const executedFnsIndexes = new Set();

    let index = 0;

    return new Promise(resolve => {
        while (pool.size < limit) {
            console.log('while', result, pool);
            pool.set(index, fns[index])

            const executionQueue = Array.from(pool).filter(item => !executedFnsIndexes.has(item.index));
            // console.log(executionQueue)

            executionQueue.forEach(([index, fn]) => {
                const currentIndex = index;
                // console.log(currentIndex);

                fn().then(value => {
                    pool.delete(currentIndex);
                    pool.set(index + 1, fns[index + 1])

                    result[currentIndex] = value;

                    if (result.length === fns.length) {
                        resolve(result);
                    }
                })
            })

            index += 1;
        }
    })
}

const fn1 = () => new Promise(r => setTimeout(r, 3400, "a"));
const fn2 = () => new Promise(r => setTimeout(r, 600, "b"));
const fn3 = () => new Promise(r => setTimeout(r, 2000, "c"));
const fn4 = () => new Promise(r => setTimeout(r, 1400, "d"));
const fn5 = () => new Promise(r => setTimeout(r, 1800, "e"));
const fn6 = () => new Promise(r => setTimeout(r, 400, "f"));

run([fn1, fn2, fn3, fn4, fn5, fn6], 2).then(arr => {
    console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
});
