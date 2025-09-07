// https://maxcode.dev/problems/all-settled/

function allSettled(iterable) {
    const result = [];
    let pendingCounter = 0;
    let settledCounter = 0;

    return new Promise(resolve => {
        for (const item of iterable) {
            const index = pendingCounter;

            // Хз что лучше, чтобы избежать повторений, такая внутренняя
            // функция или второй .then (мне кажется .then как-то красивее)
            const handlePromise = (state) => {
                result[index] = state
                settledCounter += 1;

                if (settledCounter === pendingCounter) {
                    resolve(result);
                }
            }

            Promise.resolve(item).then(
                value => handlePromise({ status: 'fulfilled', value }),
                reason => handlePromise({ status: 'rejected', reason }),
            )
            // .then(value => {
            //     result[index] = value
            //     settledCounter += 1;
            //
            //     if (settledCounter === pendingCounter) {
            //         resolve(result);
            //     }
            // })

            pendingCounter += 1;
        }

        if (pendingCounter === 0) {
            resolve([]);
        }
    })
}

const rand = () => Math.random() * 2000;

// const p1 = new Promise(((_, r) => setTimeout(r, rand(), "A")));
const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

allSettled([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
