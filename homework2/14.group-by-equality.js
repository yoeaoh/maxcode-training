// https://maxcode.dev/problems/group-by-equality/

function group(arr, isEqual) {
    const resultMap = {}
    const usedIndexes = new Set()

    // TODO: try to save indexes instead of values;
    // O(n^2)

    for (let i = 0; i < arr.length; i++) {
        if (usedIndexes.has(i)) {
            continue
        }

        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue
            }
            
            if (isEqual(arr[i], arr[j])) {
                if (!Object.hasOwn(resultMap, arr[i])) {
                    resultMap[arr[i]] = [arr[i]];
                }

                usedIndexes.add(i);
                usedIndexes.add(j);

                resultMap[arr[i]].push(arr[j]);
            }
        }
    }

    return Object.values(resultMap);
}

const words = [
  "the", "quick", "brown", "fox",
  "jumps", "over", "the", "lazy", "dog"
];

const result = group(words, (a, b) => a.length === b.length);
console.log(result)

const expectedResult = [
  ["the", "fox", "the", "dog"],
  ["quick", "brown", "jumps"],
  ["over", "lazy"],
]

const arr = [
  { x: 1, y: 2 },
  { x: 4, y: 5 },
  { x: 1, y: 3 },
  { x: 4, y: 2 },
  { x: 7, y: 3 },
];

console.log(group(arr, (a, b) => a.x === b.x));

const expectedResult1 = [
  [{ x: 1, y: 2 }, { x: 1, y: 3 }],
  [{ x: 4, y: 5 }, { x: 4, y: 2 }],
  [{ x: 7, y: 3 }],
]

console.log(group(arr, (a, b) => a.y === b.y));

const expectedResult2 = [
  [{ x: 1, y: 2 }, { x: 4, y: 2 }],
  [{ x: 4, y: 5 }],
  [{ x: 1, y: 3 }, { x: 7, y: 3 }],
]
