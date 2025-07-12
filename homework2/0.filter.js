// https://maxcode.dev/problems/filter/

function filter(array, callback) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(filter([1, 2, 3, 4], x => x > 2));
// [3, 4]

console.log(filter(["a", "b", "c", "d"], (x, i) => x.length >= i));
// ["a", "b"]
