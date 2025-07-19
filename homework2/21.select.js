// https://maxcode.dev/problems/select/

// Это решение хорошее, но в задании не указано, как нужно решать
function query(...methods) {
    return function (data) {
        return methods.reduce((acc, method) => method(acc), data);
    }
}

function where(key, value) {
    return function (data) {
        return data.filter((item) => item[key] === value)
    }
}

function sort(key) {
    return function (data) {
        // чёто запнулся на сортировке
        // изначально написал a[key] - b[key] -- не работает
        // return data.sort((a, b) => a[key].toString().localeCompare(b[key].toString()))
        return data.toSorted((a, b) => a[key] === b[key] ? 0 : (a[key] < b[key] ? -1 : 1))
    }
}

// Альтернативный (менее хороший, но возможный) вариант решения
function query(...methods) {
    return function (data) {
        // return methods.reduce((acc, method) => method(acc), data);
        return methods.reduce((acc, [methodType, ...args]) => {
            if (methodType === "where") {
                return acc.filter((item) => item[args[0]] === args[1])
            }
            if (methodType === "sort") {
                return acc.toSorted((a, b) => a[args[0]] === b[args[0]] ? 0 : (a[args[0]] < b[args[0]] ? -1 : 1))
            }
            return acc;
        }, data);
    }
}

function where(key, value) {
    return ["where", key, value]
}

function sort(key) {
    return ["sort", key]
}

// ---

const data = [
    { id: 1, name: "John", surname: "Doe", age: 3 },
    { id: 2, name: "John", surname: "Doe", age: 11 },
    { id: 3, name: "John", surname: "Doe", age: 26 },
    { id: 4, name: "Mike", surname: "Doe", age: 55 },
];

const search = query(
    // where("name", "John"),
    // where("surname", "Doe"),
    sort("age"),
);

console.log(search(data));

// [
//   { id: 2, name: "John", surname: "Doe", age: 33 },
//   { id: 1, name: "John", surname: "Doe", age: 34 },
//   { id: 3, name: "John", surname: "Doe", age: 35 },
// ]
