// https://maxcode.dev/problems/promisify/

// Тут не понял, в тестах пишет cb is not a function
function promisify(fn) {
    return function(a, b) {
        return new Promise((resolve, reject) => {
            fn(a, b, (err, result) => {
                if (err === null) {
                    resolve(result);
                } else {
                    reject(err);
                }
            })
        })
    }
}

// sum — пример реализации такой функции
function sum(a, b, cb) {
    setTimeout(() => {
        if (Math.random() < .5) {
            cb(null, a + b); // success
        } else {
            cb("error"); // bad luck
        }
    }, 0);
}

// как бы мы ее использовали
sum(2, 5, (err, result) => {
    if (err === null) {
        console.log(result); // 7
    }
});

const promisifiedSum = promisify(sum);

// как мы работаем с асинхронными функциями на сегодняшний день
promisifiedSum(3, 4).then(
    value => console.log(value), // 7
    reason => console.log(reason), // "error"
);

