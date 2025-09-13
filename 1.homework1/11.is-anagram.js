// https://maxcode.dev/problems/is-anagram/

// const firstSymbols = Iterator.from(a).reduce((firstSymbols, char) => {
//     acc[char] ??= 0;
//     acc[char]++
//     return acc;
// }, {})

function isAnagram(a, b) {
    const char2freq = {};

    for(const char of a) {
        char2freq[char] ??= 0;
        char2freq[char]++ 
    }
    
    for (const char of b) {
        char2freq[char] ??= 0;
        char2freq[char]--;
    }

    return Object.values(char2freq).every((freq) => freq === 0);
}

function isAnagram(a, b) {
    const char2freq = new Map();

    for(const char of a) {
        const freq = char2freq.get(char) ?? 0;
        char2freq.set(char, freq + 1);
    }
    
    for (const char of b) {
        const freq = char2freq.get(char) ?? 0;
        char2freq.set(char, freq - 1);
    }

    return char2freq.values().every((freq) => freq === 0);
}

console.log(isAnagram("asds", "cdab")); // true
console.log(isAnagram("bacd", "cdab")); // true
console.log(isAnagram("aaabbaaa", "aaaaaabb")); // true
console.log(isAnagram("ababa", "babab")); // false
console.log(isAnagram("qwertyee", "qwertyy")); // false
