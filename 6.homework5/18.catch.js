// https://maxcode.dev/problems/catch/

Promise.resolve(10)
    .then(x => x + 100)
    .then(x => {
        throw x * 2;
    })
    .then(x => x + 20)
    .then(x => x + 30)
    .myCatch(x => {
        console.log(x); // 220
        return x / 10;
    })
    .then(x => {
        console.log(x); // 22
    });
