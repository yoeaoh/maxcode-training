// https://maxcode.dev/problems/add-all-promises/

// TODO: Наверное, стоит отрефакторить
function sum(...promises) {
    if (promises.length === 0) {
        return new Promise(resolve => resolve(0));
    }

    let result = promises[0];

    for (let i = 0; i < promises.length; i++) {
        if (i === 0) {
            continue
        }

        result = result.then(number1 => promises[i].then(number2 => number1 + number2));
    }

    return result;
}


const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise(resolve => resolve(3));

sum().then(console.log);            // 0
sum(p1).then(console.log);          // 1
sum(p1, p2).then(console.log);      // 3
sum(p1, p2, p3).then(console.log);  // 6
