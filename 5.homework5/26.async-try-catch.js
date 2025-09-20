// https://maxcode.dev/problems/async-try-catch/

function solution() {
    return [
        { i: 1, x: 64 }, // ← Task 1
        { i: 2, x: "Invalid argument" }, // ← Task 2
        // Почему-то так, хотя я думал,
        // что должна ошибка из второго throw вернуться
    ];
}

async function double(x) {
    return x + x;
}

async function cube(x) {
    if (typeof x !== "number") {
        throw "Invalid argument";
    }
    return x ** 3;
}

async function compute(x) {
    try {
        const doubledX = await double(x);
        return await cube(doubledX)
    } catch (e) {
        throw "Error while computing";
    }
}

// Task 1
compute(2).then(
    x => console.log({ i: 1, x }),
    x => console.log({ i: 2, x }),
);

// Task 2
compute("2").then(
    x => console.log({ i: 1, x }),
    x => console.log({ i: 2, x }),
);
