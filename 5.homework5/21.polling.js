// https://maxcode.dev/problems/polling/

// TODO: almost done.. need to improve execution time, now its
//  450ms for delay 150ms and 3 calls, but should be around 300ms
function polling(fetcher, isCompleted, delay) {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            fetcher().then(
                response => {
                    if (isCompleted(response)) {
                        clearInterval(interval);
                        resolve(response);
                    }
                },
                () => {}
            );
        }, delay);
    })
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
