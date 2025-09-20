// https://maxcode.dev/problems/compose-callback/

// Голова не работает, на потом оставить
function compose(fns) {
    let result;

    return function (value, cb) {
        for (let i = fns.length - 1; i >= 0; i--) {
            const argument = i === fns.length - 1 ? value : result;

            result = fns[i](argument, cb)

            if (i === 0) {
                return result
            }
        }
    }
}

function cube(x, cb) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            cb(null, x ** 3);
        } else {
            cb(`cube(${x}) error`);
        }
    }, 500);
}

function double(x, cb) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            cb(null, x * 2);
        } else {
            cb(`cube(${x}) error`);
        }
    }, 500);
}

function subtract5(x, cb) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            cb(null, x - 3);
        } else {
            cb(`cube(${x}) error`);
        }
    }, 500);
}

cube(2, (err, result) => console.log(result === 8));
double(2, (err, result) => console.log(result === 4));
subtract5(2, (err, result) => console.log(result === -3));

const composed = compose([cube, double, subtract5]);

composed(8, (err, result) => {
    console.log(err, result);
});
