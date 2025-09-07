// https://maxcode.dev/problems/chain/

// TODO: Какие числа выведутся в консоль?

Promise.resolve(1)
    .then(x => x * 2)
    .then(x => x * 3, x => x + 5)
    .catch(x => x + 10)
    .then(x => {
        console.log(x);
        return x + 1;
    })
    .then(x => {
        throw x * 2;
    })
    .then(x => x * 4)
    .then(x => x + 1, x => x + 3)
    .catch(x => {
        console.log(x);
        throw x + 30;
    })
    .catch(x => {
        console.log(x);
        throw x + 50;
    })
    .then(x => x * 20)
    .catch(x => {
        console.log(x);
        return x + 3
    })
    .then(x => {
        console.log(x);
    });
