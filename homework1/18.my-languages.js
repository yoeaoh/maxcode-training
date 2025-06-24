// https://maxcode.dev/problems/my-languages/

function myLanguages(results) {
    const validLangs = Object
        .entries(results)
        .filter(([_, value]) => value >= 60)
        // .sort(([_A, valueA], [_B, valueB]) => valueB - valueA)
        // .map(([name, _]) => name)

    return Object
        .entries(Object.groupBy(validLangs, ([lang, value]) => value))
        .sort(([scoreA, languagesA], [scoreB, languagesB]) => scoreB - scoreA)
        .map(([score, languages]) => languages.sort(([nameA, scoreA], [nameB, scoreB]) => nameA.localeCompare(nameB)))
        .flat()
        .map(([lang, value]) => lang)
}

console.log(myLanguages({
    "Java": 72,
    "Ruby": 80,
    "ads": 65,
    "dsa": 61,
    "123": 63,
    "1234": 70,
})); // ["Ruby", "Python"]

console.log(myLanguages({
    "Hindi": 60,
    "Dutch" : 60,
    "Greek": 60,
})); // ["Dutch", "Greek", "Hindi"]

console.log(myLanguages({
    "C++": 50,
    "ASM": 10,
    "Haskell": 20,
})); // []
