// https://maxcode.dev/problems/query-params/

class QueryParams {
    // make obj instead of use this

    constructor(query) {
        if (query === undefined) {
            return;
        }

        if (typeof query === 'object') {
            const data = Object.entries(query);

            data.forEach(([key, value]) => {
                // if (!Object.hasOwn(this, key)) {
                // }
                
                this[key] ??= [];
                this[key].push(value);
            })
        }

        if (typeof query === 'string') {
            const params = query.split('&');

            params.forEach((param) => {
                const [key, value] = param.split('=')

                if (!Object.hasOwn(this, key)) {
                    this[key] = [];
                }

                this[key].push(value);
            })
        }        
    }

    has(key, value) {
        if (value === undefined) {
            return Object.hasOwn(this, key);
        }

        if (Object.hasOwn(this, key)) {
            return this[key].includes(value);
        }

        return false;
    }

    get(paramName) {
        return this[paramName][0];
    }

    getAll(paramName) {
        return this[paramName];
    }

    set(key, value) {
        this[key] = [value];
    }

    delete(key) {
        delete this[key]
    }

    append(key, value) {
        if (!Object.hasOwn(this, key)) {
            this[key] = [];
        }

        this[key].push(value);
    }

    toString() {
        return Object.entries(this)
            .flatMap(([key, values]) => values.map((value) => `${key}=${value}`))
            .join('&');

        // const entries = Object.entries(this);
        // const lastEntriesIndex = entries.length - 1;

        // return entries.reduce((acc, [key, values], index) => {
        //     const paramValues = values.map((value) => ([key, value]))

        //     const paramString = `${key}=${value}`;
        //     const divider = '&';

        //     if (index === lastEntriesIndex) {
        //         return acc.concat(paramString)
        //     }

        //     return acc.concat(paramString, divider);
        // }, '');
    }
}

// https://pokeapi.co/api/v2/pokemon/?offset=20&limit=5

const usp = new URLSearchParams();
usp.append("x", 1)
usp.append("y", 2)
usp.append("x", 3)

console.log(">>>>>>", usp.toString()); // x=1&y=2&x=3


const u = new QueryParams();

u.append("genre", "comedy");
u.append("year", "2023");

console.log(u.toString());
// "genre=comedy&year=2023"

const u1 = new QueryParams("genre=comedy&year=2023");
console.log(u1.get("genre")); // "comedy"

const u2 = new QueryParams({ genre: "comedy", year: "2023" });
console.log(u2.get("year")); // "2023"

const u3 = new QueryParams("genre=comedy&year=2023");
u3.append("year", "2024");
u3.append("year", "2025");

console.log(u3.toString());
// "genre=comedy&year=2023&year=2024&year=2025"

u3.set("year", "1999");

console.log(u3.toString());
// "genre=comedy&year=1999"

const u4 = new QueryParams("genre=comedy&year=2023");
u4.delete("year");

console.log(u4.toString()); // "genre=comedy"

const u5 = new QueryParams(
  "genre=comedy&year=2023&year=2024&year=2025"
);

console.log(u5.get("genre")); // "comedy"
console.log(u5.get("year")); // "2023"
console.log(u5.getAll("genre")); // ["comedy"]
console.log(u5.getAll("year")); // ["2023", "2024", "2025"]

const u6 = new QueryParams(
  "genre=comedy&year=2023&year=2024&year=2025"
);

console.log(u6.has("year")); // true
console.log(u6.has("year", "2023")); // true
console.log(u6.has("year", "1999")); // false

