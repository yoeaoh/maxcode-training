// https://maxcode.dev/problems/polling/

function polling(fetcher, isCompleted, delay) {

}

const testingResponse = { status: "testing" };
const timeLimitResponse = { status: "timeLimit" };
let i = 0;

const fakeFetcher = async () => {
    return i++ < 3 ? testingResponse : timeLimitResponse;
}

const result = polling(
    fakeFetcher,
    (response) => response.status !== "testing",
    500,
);

result.then(data => console.log(data));
// через 1.5 секунды получим объект со статусом "timeLimit"
