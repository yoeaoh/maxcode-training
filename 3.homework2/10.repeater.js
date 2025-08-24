// https://maxcode.dev/problems/repeater/

function repeatGenerator(str) {
    let index = 0;

    return function() {
        const result = str[index];

        index++;
        if (index === str.length) {
            index = 0;
        }
        // index %= str.length


        return result
    }
}

const gen = repeatGenerator("abc");

console.log(gen()); // "a"
console.log(gen()); // "b"
console.log(gen()); // "c"
console.log(gen()); // "a"
console.log(gen()); // "b"
console.log(gen()); // "c"
console.log(gen()); // "a"
console.log(gen()); // "b"
console.log(gen()); // "c"
console.log(gen()); // "a"
