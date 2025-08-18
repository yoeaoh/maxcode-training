// https://maxcode.dev/problems/add-two-promises/

function sum(p1, p2) {
    return p1.then(number1 => p2.then(number2 => number1 + number2));
}

const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));

sum(p1, p2).then(result => {
    console.log(result); // 1 + 2 === 3
})
