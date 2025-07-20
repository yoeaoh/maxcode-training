// https://maxcode.dev/problems/object-group-by/

function groupBy(iterable, cb) {
    const result = {};
    let index = 0;

    for (const item of iterable) {
        const key = cb(item, index);
        index += 1;

        if (!Object.hasOwn(result, key)) {
            result[key] = []
        }

        result[key].push(item);
    }

    return result;
}

console.log(groupBy(
    [1, 4, 123, 44444, 88888, 12345],
    x => x.toString().length,
));

const result = {
    "1": [1, 4],
    "3": [123],
    "5": [44444, 88888, 12345],
};
