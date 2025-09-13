// https://maxcode.dev/problems/chain/

// // Вроде лёгкая, хотя с непривычки можно начать кетчи учитывать/
// function solution() {
//     return [6, 340];
// }

// Promise.resolve(1) // F 1
//     .then(x => x * 2) // F 2
//     .then(x => x * 3, x => x + 5) // F 6
//     .catch(x => x + 10) // F 6   skip, nothing to catch 
//     .then(x => {
//         console.log(x); // 6, console 1
//         return x + 1; // 7
//     })
//     .then(x => {
//         throw x * 2; // 14
//     }) // R 14
//     .then(x => x * 4) // R 14 skip
//     .then(x => x + 1, x => x + 3) // F 17, first catch after throw
//     .catch(x => {
//         console.log(x); // skip
//         throw x + 30;
//     }) // F 17
//     .catch(x => {
//         console.log(x); // skip
//         throw x + 50;
//     }) // F 17
//     .then(x => x * 20) // F 340 17 * 20 = 20 * 20 - 60 = 340
//     .catch(x => {
//         console.log(x);
//         return x + 3
//     }) // F 340
//     .then(x => {
//         console.log(x); // console 2, 340
//     }); // F undefined

// state and fate

const p = new Promise((resolve, reject) => {
    resolve(new Promise(resolve2 => setTimeout(() => resolve2("x"), 1000)));
    resolve(1);
})

// https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

console.time("x");
p
    .then(
        x => console.log("✅", x),
        x => console.log("💔", x),
    )
    .then(() => console.timeEnd("x"));