// https://maxcode.dev/problems/all/

// Попытки с десятой, но вроде получилось.
// Хотелось бы отталкиваться от "isDone", но чёт не получается.
function all(promises) {
    const iterator = promises[Symbol.iterator]();

    let resolvedPromises = 0;
    let iterableLength;
    let index = 0;
    let isDone = false;

    const result = [];

    return new Promise((resolve, reject) => {
        while (!isDone) {
            const currentItem = iterator.next()

            if (currentItem.done) {
                isDone = true;
            }

            const currentPromise = Promise.resolve(currentItem.value);
            const currentIndex = index;

            currentPromise.then(
                value => {
                    if (!value) {
                        iterableLength = currentIndex;
                    }

                    if (value) {
                        result[currentIndex] = value

                        resolvedPromises += 1;
                    }

                    if (resolvedPromises === iterableLength) {
                        resolve(result);
                    }
                },
                reason => {
                    reject(reason)
                }
            )

            index += 1;
        }
    })
}

const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

all([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
