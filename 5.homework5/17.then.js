// https://maxcode.dev/problems/then/

// Не с первой попытки, но вроде разобрался
function solution() {
    return [
        { log: "second", time: 3000 },
        { log: undefined, time: 1000 },
        { log: "first", time: 1000 },
        { log: "second", time: 3000 },
    ];
}

const first = () => new Promise(r => setTimeout(r, 1000, 'first'));
let second;/// = () => new Promise(r => setTimeout(r, 2000, 'second'));

setTimeout(() => {
    second = () => new Promise(r => setTimeout(r, 2000, 'third'));
}, 500);

// Пример 1
first().then(function () {
    return second();
}).then(console.log);

// --------
//         ---------------
//                        -----


// Пример 2
first().then(function () {
    second();
}).then(console.log);

// --------
//         ---------------
//          ------      

// Пример 3
//           x => x
first().then(second()).then(console.log);

// --------
// ---------------
//         -----


// Пример 4
first().then(second).then(console.log);

const a = [];

let x = 1;
a.push(x);
x = 2;

// --------
//         ---------------
//                        -----
