// https://maxcode.dev/problems/csv-parser/

function parseCsv(csv) {
    const [firstRow, ...rows] = csv.split('\n')
    const keys = firstRow.split(';');

    return rows.map(row => {
        const values = row.split(';');
        return Object.fromEntries(values.map((_, i) => [keys[i], values[i]]));
    });
}

const csv = "Login email;Identifier;First name;Last name\nlaura@example.com;2070;Laura;Grey\ncraig@example.com;4081;Craig;Johnson";

console.log(parseCsv(csv));
