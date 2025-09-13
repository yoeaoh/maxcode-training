// https://maxcode.dev/problems/memo/

function memo(fn) {
    const usedArguments = new Map();

    return function(num) {
        if (!usedArguments.has(num)) {
            const calculatedValue = fn(num);
            usedArguments.set(num, calculatedValue);
        }

        return usedArguments.get(num);
    }
}

function double(x) {
    // холостой цикл на миллиард шагов
    // занимает примерно секунду
    for(let i = 0; i < 1e9; i++);
    return x * 2;
}

console.time("10");
console.log(double(10)); 20
console.timeEnd("10"); // ≈ 1s

const mDouble = memo(double);

console.time("A");
console.log(mDouble(1)) // 2
console.timeEnd("A"); // ≈ 1s

console.time("B");
console.log(mDouble(1)) // 2
console.timeEnd("B"); // ≈ 0.001s

console.time("C");
console.log(mDouble(3)) // 6
console.timeEnd("C"); // ≈ 1s

console.time("D");
console.log(mDouble(1)) // 2
console.timeEnd("D"); // ≈ 0.001s

console.time("E");
console.log(mDouble(3)) // 6
console.timeEnd("E"); // ≈ 0.001s

