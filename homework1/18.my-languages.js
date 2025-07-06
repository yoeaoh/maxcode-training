// https://maxcode.dev/problems/my-languages/

function myLanguages(results) {
    const old = Object.entries(results)
        .filter(([_, value]) => value >= 60)
        // .sort(([keyA, valueA], [keyB, valueB]) => {
        //     if (valueB !== valueA) {
        //         return valueB - valueA
        //     }
        //     return keyA.localeCompare(keyB);
        // })
        .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA || keyA.localeCompare(keyB))
        // .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))
        // .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
        .map(([name]) => name)

    return Object.keys(results)
        .filter(key => results[key] >= 60)
        .sort((a, b) => results[b] - results[a] || a.localeCompare(b))

    // return Object
    //     .entries(Object.groupBy(validLangs, ([lang, value]) => value))
    //     .sort(([scoreA, languagesA], [scoreB, languagesB]) => scoreB - scoreA)
    //     .map(([score, languages]) => languages.sort(([nameA, scoreA], [nameB, scoreB]) => nameA.localeCompare(nameB)))
    //     .flat()
    //     .map(([lang, value]) => lang)
}

console.log(myLanguages({
    "Java": 72,
    "Ruby": 80,
    "dsa": 71,
    "ads": 71,
    "123": 63,
    "1234": 70,
})); 

// console.log(myLanguages({
//     "Hindi": 60,
//     "Dutch" : 60,
//     "Greek": 60,
// })); // ["Dutch", "Greek", "Hindi"]

// console.log(myLanguages({
//     "C++": 50,
//     "ASM": 10,
//     "Haskell": 20,
// })); // []
