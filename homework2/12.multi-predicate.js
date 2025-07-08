// https://maxcode.dev/problems/multi-predicate/

function multiPredicate(...predicates) {
    return function (candidate) {
        return predicates.every(predicate => predicate(candidate))
    }
}

// 10, 20, 30, ...
const endsWithZero = num => num.toString().at(-1) === "0";

// 54, 55, 56, ...
const greaterThan53 = num => num > 53;

const foo = multiPredicate(endsWithZero, greaterThan53);

console.log(foo(40)); // false
console.log(foo(99)); // false
console.log(foo(80)); // true
