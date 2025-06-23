// https://maxcode.dev/problems/best-results/

function bestResults(attempts) {

}

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
];

console.log(bestResults(input));

const output = [
    {
        name: "Женя",
        score: 55,
        date: "01.10.2021",
    },
    {
        name: "Саша",
        score: 78,
        date: "28.09.2021",
    },
];
