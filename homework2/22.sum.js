// https://maxcode.dev/problems/sum/

// какая-то с подвохом задача..
// я не мог найти условие для выхода из этой рекурсии
// решил загуглить -- ужас..
function sum(n) {
    let result = 0;

    const curriedSum = function(x) {
        result = result + x;

        console.log(result);

        return curriedSum;
    }

    return curriedSum(n);
}

// console.log(sum(1)(2)(3)(4));
sum(1)(2)(3)(4);
// console.log(sum(5)(5)(5) == 15);

// const foo = sum(2)(4)(6); // эквивалентно числу 12

// // если к числу 12 добавить 100, 200 и 300
// // то получим 612   
// console.log(foo(100)(200)(300) == 612);

// // если к числу 12 добавить 2000 и 5000,
// // то получим 7012    
// console.log(foo(2000)(5000) == 7012);
