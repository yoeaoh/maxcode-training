// https://maxcode.dev/problems/shortest-word/

// time  O(n)
// space O(n)

function shortestWord(str) {
    const words = str.split(' ');
    // let result = words[0].length;

    // for (const word of words) {
    //     result = word.length < result ? word.length : result;
    // }

    // return result;

    //                    Iterator
    //                    ↓
    const lengths = words.values().map(word => word.length);

    return Math.min(...lengths);
}

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator

const str = "lorem ipsum dolor sit amet";

console.log(shortestWord(str)); // 3
