// https://maxcode.dev/problems/select/

function query(...methods) {
    return function (data) {
        return methods.reduce((acc, method) => method(acc), data);
    }
}

function where(key, value) {
    return function(data) {
        return data.filter((item) => item[key] === value)
    }
}

function sort(key) {
    return function(data) {
        // чёто запнулся на сортировке
        // изначально написал a[key] - b[key] -- не работает
        return data.sort((a, b) => a[key].toString().localeCompare(b[key].toString()))
    }
}

const data = [
  { id: 1, name: "John", surname: "Doe", age: 34 },
  { id: 2, name: "John", surname: "Doe", age: 33 },
  { id: 3, name: "John", surname: "Doe", age: 35 },
  { id: 4, name: "Mike", surname: "Doe", age: 35 },
];

const search = query(
  where("name", "John"),
  where("surname", "Doe"),
  sort("age"),
);

console.log(search(data));

// [
//   { id: 2, name: "John", surname: "Doe", age: 33 },
//   { id: 1, name: "John", surname: "Doe", age: 34 },
//   { id: 3, name: "John", surname: "Doe", age: 35 },
// ]
