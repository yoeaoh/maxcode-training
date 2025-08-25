// https://maxcode.dev/problems/sleep/

// TODO: Вроде бы правильно написал, но тесты не проходит..
//  Условие не совсем понятное, мб как-то по-другому должно
//  работать, но я не понял
function sleep(ms) {
    return new Promise(resolve => {
        return setTimeout(() => resolve, ms)
    })
}

multiplyBy3(10)
    .then(x => divideBy5(x))
    .then(x => square(x))
    .then(x => console.log(x)); // 36 через 4 секунды

multiplyBy3(10)
    .then(x => divideBy5(x))
    .then(sleep(2000)) // добавляет дополнительные 2 секунды
    .then(x => square(x))
    .then(x => console.log(x)); // 36 через 6 секунд
