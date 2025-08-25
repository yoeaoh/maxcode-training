// https://maxcode.dev/problems/promise-logic/

// v1
function and1(p1, p2) {
    return p1.then(() => new Promise(res => res(p2))).catch(() => new Promise((_, rej) => rej(p2)));
}

// v2
function and(p1, p2) {
    return p1
        .then(() => p2
            .then(value => new Promise(res => res(value)))
            .catch(reason => new Promise((_, rej) => rej(reason))
        )
        .catch((reason) => new Promise((_, rej) => rej(reason))))
}

and(Promise.resolve(1), Promise.resolve(2)).then(
    () => console.log("fulfulled"), // ✓
    () => console.log("rejected"),
)

and(Promise.reject(1), Promise.resolve(2)).then(
    () => console.log("fulfulled"),
    () => console.log("rejected"),  // ✓
)
