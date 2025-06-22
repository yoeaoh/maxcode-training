// https://maxcode.dev/problems/compare-objects/

function compareObjects(o1, o2) {
    const keys = Object.keys(o1);
    const secondKeys = Object.keys(o2);
    if (keys.length !== secondKeys.length) return false;

    for (const key of keys) {
        if (!Object.hasOwn(o2, key)) return false;
        if (!Object.is(o2[key], o1[key])) return false;
    }

    return true;
}

console.log(compareObjects(
    { x: 1, y: "a" },
    { x: 1, y: "a" },
)); // true

console.log(compareObjects(
    { x: 1, y: "a" },
    { x: 1, y: "b" },
)); // false
