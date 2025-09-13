// https://maxcode.dev/problems/finally/

// Два кейса не прошло, но я их не понял)
// 1. Успешный промис, а в колбэке возвращается реджектнутый промис
// 2. Неуспешный промис, в колбеке возвращается реджектнутый промис

Promise.prototype.myFinally = function(callback) {
    // const newCallback = (value) => {
    //     const newPromise = Promise.resolve(callback())
        
    //     return newPromise.then(() => value);
    // }

    return this.then(
        (value) => {
            const newPromise = Promise.resolve(callback())
            
            return newPromise.then(() => value);
        }, 
        (reason) => {
            const newPromise = Promise.resolve(callback())

            return newPromise.then(() => {throw reason});
        },
    );
}

Promise.reject(100)
    .myFinally(() => {
        // return Promise.reject("☠️");
        return "ok";
    })
    .then(
        x => console.log(x), 
        x => console.log(x), // 100
    );

// console.time("???")
// Promise.resolve(100)
//     .myFinally(() => {
//         return new Promise(r => setTimeout(r, 1000));
//     })
//     .then(
//         x => console.log(1, x),
//         x => console.log(2, x),
//     )
//     .then(() => console.timeEnd("???"))
