function onlyDigits(str) {
    return /^\d+$/g.test(str);
}

console.log(onlyDigits("123")); // true
console.log(onlyDigits("qwerty")); // false
console.log(onlyDigits("5!")); // false
console.log(onlyDigits("2e2")); // false
