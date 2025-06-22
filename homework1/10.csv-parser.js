// https://maxcode.dev/problems/csv-parser/

function parseCsv(csv) {
    const rows = csv.split('\n')
    const headers = rows.shift().split(';');

    return rows.map(row => {
        const fieldValues = row.split(';');
        return Object.fromEntries(fieldValues.map((value, index) => [headers[index], value]));
    })
}

const csv = "Login email;Identifier;First name;Last name\nlaura@example.com;2070;Laura;Grey\ncraig@example.com;4081;Craig;Johnson";

console.log(parseCsv(csv));
