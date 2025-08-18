// https://maxcode.dev/problems/promise-logic/

function and(p1, p2) {

}

and(Promise.resolve(1), Promise.resolve(2)).then(
    () => console.log("fulfulled"), // ✓
    () => console.log("rejected"),
)

and(Promise.reject(1), Promise.resolve(2)).then(
    () => console.log("fulfulled"),
    () => console.log("rejected"),  // ✓
)
