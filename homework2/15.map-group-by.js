// https://maxcode.dev/problems/map-group-by/

function groupBy(iterable, cb) {
    const result = new Map();
    let index = 0;

    for (const item of iterable) {
        const group = cb(item, index);
        index++;

        if (!result.has(group)) {
            result.set(group, [item]);
            continue;
        }

        if (result.has(group)) {
            const groupItems = result.get(group);
            groupItems.push(item);

            result.set(group, groupItems);
        }
    }

    return result;
}

const words = [
    "the", "quick", "brown", "fox",
    "jumps", "over", "the", "lazy", "dog"
];

const result = groupBy(words, a => a.length);
console.log(result)

// Map {
//   3 => ["the", "fox", "the", "dog"],
//   5 => ["quick", "brown", "jumps"],
//   4 => ["over", "lazy"],
// }
