// https://maxcode.dev/problems/chain/

// Вроде лёгкая, хотя с непривычки можно начать кетчи учитывать/
function solution() {
    return [6, 340];
}

Promise.resolve(1)
    .then(x => x * 2) // 2
    .then(x => x * 3, x => x + 5) // 6
    .catch(x => x + 10) // skip, nothing to catch
    .then(x => {
        console.log(x); // 6, console 1
        return x + 1; // 7
    })
    .then(x => {
        throw x * 2; // 14
    })
    .then(x => x * 4) // skip
    .then(x => x + 1, x => x + 3) // 17, first catch after throw
    .catch(x => {
        console.log(x); // skip
        throw x + 30;
    })
    .catch(x => {
        console.log(x); // skip
        throw x + 50;
    })
    .then(x => x * 20) // 17 * 20 = 20 * 20 - 60 = 340
    .catch(x => {
        console.log(x);
        return x + 3
    })
    .then(x => {
        console.log(x); // console 2, 340
    });
