// https://maxcode.dev/problems/find-integer/

function findInteger(...predicates) {
    let candidate = 1;

    // Я хотел написать более оптимизированную версию, когда
    // мы проверяем сначала в цикле первый предикат, и, пока он
    // будет верным, мы не проверяем остальные, и так по кругу

    // но не получилось чёт.. сделал обычную

     while (!predicates.every(predicate => predicate(candidate))) {
        candidate++;
     }

    return candidate
}

// 100, 101, 102, ..., 998, 999
const isThreeDigitNumber = num => num.toString().length === 3;

// 1, 4, 9, 16, ...
const isSquare = num => Number.isInteger(Math.sqrt(num));

// 1, 3, 5, 7, ...
const isOdd = num => num % 2 === 1;

// 10, 20, 30, ...
const endsWithZero = num => num.toString().at(-1) === "0";

// 54, 55, 56, ...
const greaterThan53 = num => num > 53;


console.log(findInteger(greaterThan53));
// 54
//
console.log(findInteger(isThreeDigitNumber, isOdd));
// // 101
//
console.log(findInteger(endsWithZero, isSquare));
// // 100
//
console.log(findInteger(greaterThan53, isSquare, isOdd));
// // 81
//
console.log(findInteger());
// 1

