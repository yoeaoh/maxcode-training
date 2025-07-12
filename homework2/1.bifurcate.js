// https://maxcode.dev/problems/bifurcate/

function bifurcate(array, predicate) {
  const matched = [];
  const unmatched = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      matched.push(array[i])
      continue;
    } 
    
    unmatched.push(array[i])
  }

  return [matched, unmatched]
}

console.log(bifurcate([1, "a", 3, "b", "c"], x => typeof x === "string"));
// [["a", "b", "c"], [1, 3]]

console.log(bifurcate([1, 2, 3, 4], x => x > 2));
// [[3, 4], [1, 2]]

console.log(bifurcate(["a", "b", "c", "d"], (x, i) => i % 2 === 0));
// [["a", "c"], ["b", "d"]]

console.log(bifurcate([3, 5, 9, 1, 4, 7, 2], (x, i, arr) => x <= arr[0]));
// [[3, 1, 2], [5, 9, 4, 7]]
