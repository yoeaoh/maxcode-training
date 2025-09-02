// https://maxcode.dev/problems/all-settled/

// Много повторений, но вроде нормально не сократить
function allSettled(iterable) {
    const iterator = iterable[Symbol.iterator]()

    const result = [];
    let isDone = false;
    let index = 0;
    let iterableLength = 0;
    let resolvedPromises = 0;

    return new Promise((resolve) => {
        while (!isDone) {
            const currentItem = iterator.next();

            if (currentItem.done) {
                isDone = true;
            }

            const currentPromise = Promise.resolve(currentItem.value);
            const currentIndex = index;

            currentPromise.then(
                value => {
                    if (value) {
                        result[currentIndex] = { status: 'fulfilled', value }
                        resolvedPromises += 1;
                    } else {
                        iterableLength = currentIndex;
                    }

                    if (resolvedPromises === iterableLength) {
                        resolve(result)
                    }
                },
                reason => {
                    result[currentIndex] = { status: 'rejected', reason }
                    resolvedPromises += 1;

                    if (resolvedPromises === iterableLength) {
                        resolve(result)
                    }
                }
            )

            index += 1;
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
