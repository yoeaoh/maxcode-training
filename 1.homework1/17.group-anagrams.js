// https://maxcode.dev/problems/group-anagrams/

function groupAnagrams(words) {
    return Object.values(Object.groupBy(words, (item) => {
        return item.split("").sort().join('');
    }))
}
// TODO;
// rewrite without groupby

const a = [1, 2];

// a.join = () => "hello";
// console.log(a.toString())

// console.log(groupAnagrams([
//     "tsar",
//     "rat",
//     "tar",
//     "star",
//     "tars",
//     "cheese",
// ]));

// const expected = [
//     ["tsar", "star", "tars"],
//     ["rat", "tar"],
//     ["cheese"],
// ];
