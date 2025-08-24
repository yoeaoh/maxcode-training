// https://maxcode.dev/problems/compare-objects/

function compareObjects(o1, o2) {
    const keys = Object.keys(o1);
    const secondKeys = Object.keys(o2);
    if (keys.length !== secondKeys.length) return false;

    return keys.every((key) => Object.hasOwn(o2, key) && Object.is(o1[key], o2[key]))

    // for (const key in o1) {
    //     if (!Object.hasOwn(o2, key)) return false;
    //     if (!Object.is(o2[key], o1[key])) return false;
    // }

    // return true;
}

// Object.propertyCount

// https://github.com/tc39/notes/blob/main/meetings/2025-04/april-15.md#objectpropertycount-for-stage-1-or-2


console.log(compareObjects(
    { x: 1, y: "a" },
    { x: 1, y: "a" },
)); // true

console.log(compareObjects(
    { x: 1, y: "a" },
    { x: 1, y: "b" },
)); // false
