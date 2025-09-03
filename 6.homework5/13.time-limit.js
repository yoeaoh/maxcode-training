// https://maxcode.dev/problems/time-limit/

function timeLimit(fn, ms) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), ms);

            fn(...args).then(resolve, reject);
        })
    }
}

const fn = name => new Promise(resolve => {
    setTimeout(() => resolve(`Hello, ${name}!`), 500);
});

const fn250 = timeLimit(fn, 250);

console.time("xxx");

fn250("World").then(
    value => {
        console.timeEnd("xxx");
        console.log("1 >>", value);
    },
    reason => {
        console.timeEnd("xxx");
        console.log("2 >>", reason); // "Time Limit Exceeded"
    },
);
