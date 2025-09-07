https://maxcode.dev/problems/then/

function solution() {
    return [
        { log: "", time: 0 },
        { log: "", time: 0 },
        { log: "", time: 0 },
        { log: "", time: 0 },
    ];
}

const first = () => new Promise(r => setTimeout(r, 1000, 'first'));
const second = () => new Promise(r => setTimeout(r, 2000, 'second'));

// Пример 1
first().then(function () {
    return second();
}).then(console.log);

// Пример 2
first().then(function () {
    second();
}).then(console.log);

// Пример 3
first().then(second()).then(console.log);

// Пример 4
first().then(second).then(console.log);
