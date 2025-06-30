function onlyDigits(str) {
    return /^\d+$/g.test(str);
}

function onlyDigits2(str) {
    for (const char of str) {
        if (!("0" <= char && char <= "9")) return false;
    }

    return true;
}

// "Abcde" < "Abm"

const longString = "0".repeat(300_000_000);

console.time("🦊")
console.log(onlyDigits(longString))
console.timeEnd("🦊")

console.time("🦔")
console.log(onlyDigits2(longString))
console.timeEnd("🦔")


//         regexp       for classic    for of
//         O(n)         O(n)           O(n)
//  100m   58.703ms     210.979ms      844.66ms
//  300m   171.402ms    630.191ms      2.529s

// console.log(onlyDigits2("123")); // true
// console.log(onlyDigits2("987")); // true
// console.log(onlyDigits2("qwerty")); // false
// console.log(onlyDigits2("5!")); // false
// console.log(onlyDigits2("2e2")); // false
