function solution() {
    return ["F", "B", "D", "A", "H", "I", "L", "E", "J", "C", "K"];
}

function sync() {
    console.log('A'); // 4, A
}

async function async1() {
    console.log('B'); // 2, B
    await async2();
    console.log('C'); // 10, C
}

async function async2() {
    console.log('D'); // 3, D
    await sync();
    console.log('E'); // 8, E
}

console.log('F'); // 1, F
async1();

new Promise(function (resolve) {
    console.log('H'); // 5, H
    resolve();
    console.log('I'); // 6, I
})
    .then(() => console.log('J')) // 9, J
    .then(() => console.log('K')) // 11, K

console.log('L'); // 7, L