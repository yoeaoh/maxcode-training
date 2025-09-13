// https://maxcode.dev/problems/sleep/

function sleep(ms) {
    return function(prevValue) {
        // return new Promise(resolve => setTimeout(() => {
        //     resolve(prevValue);
        // }, ms))
        return new Promise(resolve => setTimeout(resolve, ms, prevValue))
    }
}

// multiplyBy3(10)
//     .then(x => divideBy5(x))
//     .then(x => square(x))
//     .then(x => console.log(x)); // 36 через 4 секунды
//
// multiplyBy3(10)
//     .then(x => divideBy5(x))
//     .then(sleep(2000)) // добавляет дополнительные 2 секунды
//     .then(x => square(x))
//     .then(x => console.log(x)); // 36 через 6 секунд
