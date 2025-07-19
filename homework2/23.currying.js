// https://maxcode.dev/problems/currying/

function curry(fn, ...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    }
    
    return function(...nextArgs) {
        return curry(fn, ...args, ...nextArgs)
    }
}

function sum(a, b, c, d, e, f, g, h, j) {
  return a + b + c + d + e + f + g + h + j;
}

//    fn  args  nextArgs
curry(sum, 1)(2, 3, 4)   (5, 6)()(7)(8, 9) === curry(sum, 1, 2, 3, 4)    (5, 6)()(7)(8, 9)


// curry(sum, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
// === sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11) === 45

const res1 = curry(sum, 1)//(2, 3, 4)(5, 6)()(7)(8, 9);
console.log(res1); // 45

const res = curry(sum, 1)(2, 3, 4)(5, 6);
// накопили 1 + 2 + 3 + 4 + 5 + 6 === 21

const res2 = res(7); // накопили 28

console.log(res(1, 1, 1)); // 24
console.log(res(1, 2, 3)); // 27
console.log(res2(2, 2));   // 32
