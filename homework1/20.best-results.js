// https://maxcode.dev/problems/best-results

function sortByScore (a, b) {
    return b.score - a.score;
}

function sortByDate (a, b) {
    // const [aDay, aMonth, aYear] = a.date.split('.');
    // const [bDay, bMonth, bYear] = b.date.split('.');
    // const dateA = new Date(`${aYear}-${aMonth}-${aDay}`).getTime();
    // const dateB = new Date(`${bYear}-${bMonth}-${bDay}`).getTime();

    // return dateA - dateB;

    // "2014.05.12"
    // "2018.02.03"

    const strA = a.date.split('.').join("");
    const strB = b.date.split('.').join("");

    return strA.localeCompare(strB);
}

function sortByName (a, b) {
    return a.name.localeCompare(b.name)
}

function bestResults(attempts) {
    return Object
        .entries(Object.groupBy(attempts, ({name}) => name))
        .map(([_, attempts]) => {
            const attemptsBestScore = attempts.sort(sortByScore)[0].score;
            return attempts
                .filter((attempt) => attempt.score === attemptsBestScore)
                .sort(sortByDate)[0];
        })
        .sort(sortByName)
}

// TODO: переписать

const input = [
    {
        name: "Саша",
        score: 78,
        date: "28.09.2021",
    },
    {
        name: "Женя",
        score: 55,
        date: "01.10.2021",
    },
    {
        name: "Саша",
        score: 63,
        date: "30.09.2021",
    },
    {
        name: "Саша",
        score: 100,
        date: "30.09.1999",
    },
    {
        name: "Саша",
        score: 100,
        date: "31.09.2021",
    },
];

console.log(bestResults(input));