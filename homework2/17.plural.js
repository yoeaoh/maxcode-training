// https://maxcode.dev/problems/plural/

function plural(forms) {
    const [one, few, many] = forms;

    return function(count) {
        if (count === 1) return one;
        if (count >= 2 && count <= 4) return few;
        if (count >= 5 && count <= 20) return many;

        const ending = count % 10;
        if (ending === 1) return one;
        if (ending >= 2 && ending <= 4) return few;
        if (ending >= 5 || ending === 0) return many;
    }
}

const pluralCows = plural(["корова", "коровы", "коров"]);

console.log(1, pluralCows(1)); // "корова"
console.log(2, pluralCows(2)); // "коровы"
console.log(5, pluralCows(5)); // "коров"

const pluralProblems = plural(["задача", "задачи", "задач"]);

console.log(7, pluralProblems(7));   //  "задач"
console.log(31, pluralProblems(31)); // "задача"
console.log(52, pluralProblems(52)); // "задачи"
