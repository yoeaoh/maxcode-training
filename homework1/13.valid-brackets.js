// https://maxcode.dev/problems/valid-brackets/

const bracketPairs = {
    "{": "}",
    "(": ")",
    "<": ">",
    "[": "]",
}

function isValidBrackets(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (Object.keys(bracketPairs).includes(str[i])) {
            stack.push(str[i]);
            continue;
        }

        if (stack.length === 0) return false;

        const currentOpeningBracket = stack.pop();
        if (bracketPairs[currentOpeningBracket] !== str[i]) return false;
    }

    return stack.length === 0;
}

console.log(isValidBrackets("()(()())")); // true
console.log(isValidBrackets("(([]{}[<>[{}]]))")); // true

// Не все скобки закрылись
console.log(isValidBrackets("((())")); // false

// Есть лишние закрывающие скобки
console.log(isValidBrackets("()))")); // false

// Скобки не совпадают по типам
console.log(isValidBrackets("[(])")); // false
