// https://maxcode.dev/problems/promise-logic/

// Нужно объяснение, написал наугад (я вообще думал, что
// resolve/reject только строку принимают, но решил попробовать
// передать туда промис)
function and(p1, p2) {
    return p1.then(() => Promise.resolve(p2)).catch(() => Promise.reject(p2));
}

and(Promise.resolve(1), Promise.resolve(2)).then(
    () => console.log("fulfulled"), // ✓
    () => console.log("rejected"),
)

and(Promise.reject(1), Promise.resolve(2)).then(
    () => console.log("fulfulled"),
    () => console.log("rejected"),  // ✓
)
