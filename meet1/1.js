// https://maxcode.dev/problems/every/

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false
        }
    }

    return true;
}

// console.log(every([1, 2, 3, 4], x => x > 2));
// // false

// console.log(every([4, 3, 2, 1], x => x > 2));
// // false

// console.log(every([1, 2, 3, 4], x => x > 0));
// // true

// console.log(every(["a", "b", "c", "d"], (x, i) => x.length >= i));
// // false

// https://maxcode.dev/problems/array-diff/

function arrayDiff(a, b) {


    const secondArrayElements = new Set(b)

    return a.filter((item) => secondArrayElements.has(item));

    // const result = [];

    // for (const item of a) {
    //     if (secondArrayElements.has(item)) {
    //         result.push(item)
    //     }
    // }

    // for (let i = 0; i < a.length; i++) {
    //     if (secondArrayElements.has(a[i])) {
    //         result.push(a[i])
    //     }
    // }

    // return result;
}

// console.log(arrayDiff([1, 2, 3, 4, 5, 6], [4, 6, 8, 0,])); // [1, 2, 3, 5]
// console.log(arrayDiff([3, 1, 1, 1, 1, 2, 2, 2], [4, 4, 2, 7, 8, 8])); // [3, 1, 1, 1, 1] 


// https://maxcode.dev/problems/who-is-online/

function extractStatus(user) {
    if (user.lastActivity > 10 && user.status === 'online') {
        return "away";
    }
    return user.status;
}

function whosOnline(friends) {
    return friends.reduce((acc, user) => {
        const status = extractStatus(user);

        // y = x ?? 0

        // x = x + 5
        // x += 5

        // acc[status] = acc[status] ?? 0
        // if (acc[status] === undefined) {
        //     acc[status] = 0
        // }

        acc[status] ??= 0
        acc[status]++
        
        // acc[status] ? acc[status]++ : acc[status] = 1

        return acc;
    }, {})
}

const users2 = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 50
    },
];

// console.log(whosOnline(users2));


// https://maxcode.dev/problems/memo/

function memo(fn) {
    const results = new Map()

    return function(x) {
        if (results.has(x)) {
            return results.get(x)
        }

        const currentResult = fn(x);

        results.set(x, currentResult)

        return currentResult;
    }
}


function double(x) {
  // холостой цикл на миллиард шагов
  // занимает примерно секунду
  for(let i = 0; i < 1e9; i++);
  return x * 2;
}

console.time("10");
console.log(double(10)); 20
console.timeEnd("10"); // ≈ 1s

const mDouble = memo(double);

console.time("A");
console.log(mDouble(1)) // 2
console.timeEnd("A"); // ≈ 1s

console.time("B");
console.log(mDouble(1)) // 2
console.timeEnd("B"); // ≈ 0.001s

console.time("C");
console.log(mDouble(3)) // 6
console.timeEnd("C"); // ≈ 1s

console.time("D");
console.log(mDouble(1)) // 2
console.timeEnd("D"); // ≈ 0.001s

console.time("E");
console.log(mDouble(3)) // 6
console.timeEnd("E"); // ≈ 0.001s

// https://maxcode.dev/problems-compilation/?ids=top-words%7Eshortest-word%7Eplaylist%7Epivot-index%7Eonly-digits%7Ehomogenous-arrays%7Egreet-developers%7Efind-developers%7Estring-template%7Ecsv-parser%7Eis-anagram%7Eequal-arrays%7Enon-unique-numbers%7Ecompare-objects%7Ewhere%7Egroup-anagrams%7Emy-languages%7Esort-the-odd%7Ebest-results%7Evalid-brackets