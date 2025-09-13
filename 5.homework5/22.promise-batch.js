// https://maxcode.dev/problems/promise-batch/

// TODO: maybe refactor
async function run(fns, limit) {
    const result = [];
    let from = 0;
    let to = limit;

    // return new Promise(async (resolve) => {
        while (to - limit < fns.length) {
            const portion = fns.slice(from, to).map(fn => fn());
            from += limit;
            to += limit;

            await Promise.all(portion).then(values => result.push(...values));
        }

        // resolve(result);
        return result;
    // })
}

const fn1 = () => new Promise(r => setTimeout(r, 3400, "a"));
const fn2 = () => new Promise(r => setTimeout(r, 600, "b"));
const fn3 = () => new Promise(r => setTimeout(r, 2000, "c"));
const fn4 = () => new Promise(r => setTimeout(r, 1400, "d"));
const fn5 = () => new Promise(r => setTimeout(r, 1800, "e"));
const fn6 = () => new Promise(r => setTimeout(r, 400, "f"));


run([fn1, fn2, fn3, fn4, fn5, fn6], 2)
.then(arr => {
    console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
});