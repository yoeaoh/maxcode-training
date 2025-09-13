// https://maxcode.dev/problems/add-two-promises/

function sum(p1, p2) {
    return p1.then(number1 => p2.then(number2 => number1 + number2));
}

// async function sum(p1, p2) {
//     const v1 = await p1(); // 1s
//     console.timeLog("🦊")
//     const v2 = await p2(); // 2s
//     console.timeLog("🦊")

//     return v1 + v2;
// }

async function sum(f1, f2) {
    const p1 = f1();
    const p2 = f2();
    // let v1, v2;
    // p1.then((_v1) => v1 = _v1)
    // p2.then((_v2) => v2 = _v2)

    // const [v1, v2] = await Promise.all([f1(), f2()])

    // return {v1, v2};

    // return p1.then(number1 => p2.then(number2 => number1 + number2));
    // return f1().then(number1 => f2().then(number2 => number1 + number2));
}

const p1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const p2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));

console.time("🦊");
sum(p1, p2)
.then(result => {
    console.log(result); // 1 + 2 === 3
})
