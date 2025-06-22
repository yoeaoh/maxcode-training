// https://maxcode.dev/problems/shortest-word/

function shortestWord(str) {
    const wordsArray = str.split(' ');
    let result = wordsArray[0].length;

    for (const word of wordsArray) {
        result = word.length < result ? word.length : result;
    }

    return result;
}

const str = "lorem ipsum dolor sit amet";

console.log(shortestWord(str)); // 3
