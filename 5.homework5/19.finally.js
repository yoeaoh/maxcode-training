// https://maxcode.dev/problems/finally/

// Два кейса не прошло, но я их не понял)
// 1. Успешный промис, а в колбэке возвращается реджектнутый промис
// 2. Неуспешный промис, в колбеке возвращается реджектнутый промис

Promise.prototype.myFinally = function(callback) {
    const newCallback = () => {
        callback();
        return this;
    }

    return this.then(newCallback, newCallback);
}

Promise.resolve(100)
    .myFinally(() => {
        return "ok";
    })
    .then(
        x => console.log(x), // 100
        x => console.log(x),
    );

Promise.resolve(100)
    .myFinally(() => {
        throw "oops";
    })
    .then(
        x => console.log(x),
        x => console.log(x), // "oops"
    );
