// https://maxcode.dev/problems/map-group-by-advanced/

// Эту я почему-то на удивление легко написал..
function groupBy(
    array,
    classifier,
    downstream,
    accumulatorSupplier,
) {
    const groups = new Map()

    for (let i = 0; i < array.length; i++) {
        const groupKey = classifier(array[i]);

        if (!groups.has(groupKey)) {
            // не совсем понял, правильно ли я сделал использовал supplier
            // если правильно, то почему он функция?
            groups.set(groupKey, accumulatorSupplier());
        }

        const currentGroupValue = groups.get(groupKey);
        groups.set(groupKey, downstream(currentGroupValue, array[i]))
    }

    return groups;
}

const employees = [
    { name: "James", income: 1000, profession: "developer", age: 23, },
    { name: "Robert", income: 1100, profession: "qa", age: 34, },
    { name: "John", income: 1200, profession: "designer", age: 32, },
    { name: "Mary", income: 1300, profession: "designer", age: 22, },
    { name: "Patricia", income: 1400, profession: "qa", age: 23, },
    { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
    { name: "Max", income: 1600, profession: "developer", age: 27, },
];

const profession2totalIncome = groupBy(
    employees,
    employee => employee.profession, // group by profession
    (acc, employee) => acc + employee.income, // sum up incomes
    () => 0, // provide an initial value for map's value
);

console.log(profession2totalIncome);

// Map { 'developer' => 4100, 'qa' => 2500, 'designer' => 2500 }

const profession2names = groupBy(
    employees,
    employee => employee.profession,
    (acc, employee) => {
        acc.push(employee.name);
        return acc;
    },
    () => [],
);

console.log(profession2names)

// Map {
//   'developer' => [ 'James', 'Jennifer', 'Max' ],
//   'qa' => [ 'Robert', 'Patricia' ],
//   'designer' => [ 'John', 'Mary' ],
// }
