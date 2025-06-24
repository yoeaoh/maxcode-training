// https://maxcode.dev/problems/group-anagrams/

function groupAnagrams(words) {
    return Object.values(Object.groupBy(words, (item) => {
        return item.split("").sort((a, b) => a.localeCompare(b))
            //.join('');
    }))
}

console.log(groupAnagrams([
    "tsar",
    "rat",
    "tar",
    "star",
    "tars",
    "cheese",
]));

const expected = [
    ["tsar", "star", "tars"],
    ["rat", "tar"],
    ["cheese"],
];
