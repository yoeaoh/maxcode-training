// https://maxcode.dev/problems/compose-async/

function compose(fns) {

}

const square = x => new Promise(r => setTimeout(r, 2000, x ** 2));
const divideBy5 = x => new Promise(r => setTimeout(r, 1500, x / 5));
const multiplyBy3 = x => new Promise(r => setTimeout(r, 500, x * 3));

const foo = compose([square, divideBy5, multiplyBy3]);

console.time("xxx");
foo(10).then(value => {
    console.log(value);
    console.timeEnd("xxx");
});
