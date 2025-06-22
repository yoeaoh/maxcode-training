// https://maxcode.dev/problems/is-anagram/

function isAnagram(a, b) {
    if (a.length != b.length) return false

    const firstSymbols = Array.from(a).reduce((acc, curr) => {
        acc[curr] ??= 0;
        acc[curr]++
        return acc;
    }, {})

    for (let i = 0; i < b.length; i++) {
        if (firstSymbols[b[i]] === undefined) return false;

        firstSymbols[b[i]]--;

        if (firstSymbols[b[i]] < 0) return false;
    }

    return true;
}

console.log(isAnagram("asds", "cdab")); // true
console.log(isAnagram("bacd", "cdab")); // true
console.log(isAnagram("aaabbaaa", "aaaaaabb")); // true
console.log(isAnagram("ababa", "babab")); // false
console.log(isAnagram("qwertyee", "qwertyy")); // false
