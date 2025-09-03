// https://maxcode.dev/problems/event-loop/

// Не совсем понял, почему интервал вызовется перед таймаутом
// Я думал в стек кладётся типо, сначала увидели интервал, закинули его в стек, но пока не выполняем
// Дальше идём, видим таймаут, закидываем в стек, не выполняем, ждём
// Дальше берём верхнее из стека (последним был таймаут), и выполняем его

// Думаю, скорее всего это из-за того, что у них одинаковая задержка, и из-за
// этого интервал выполнится на микросекунду раньше (т.к. раньше создан)

function solution() {
    return [
        ["A", "B", "C", "E", "G", "D", "B", "F"], // ← Task 1
        ["I", "G", "H", "J", "L", "K"], // ← Task 2
    ]
}

// TASK 1
console.log('A');

const intervalId = setInterval(() => {
    console.log('B');
}, 10);

setTimeout(() => {
    const promise = new Promise((resolve) => {
        console.log('C');
        resolve('D');
        console.log('E');
    });

    promise.then((value) => {
        console.log(value);
        setTimeout(() => {
            console.log('F');
            clearInterval(intervalId);
        }, 10);
    });

    console.log('G');
}, 10);

// // TASK 2
// setTimeout(() => {
//     console.log('G');
//     Promise.resolve().then(() => console.log('H'));
// }, 0);
//
// new Promise(function (resolve, reject) {
//     console.log('I');
//     setTimeout(function () {
//         console.log('J');
//         resolve('K');
//     }, 0);
// }).then((res) => {
//     console.log('L');
//     setTimeout(() => {
//         console.log(res);
//     }, 0);
// });
