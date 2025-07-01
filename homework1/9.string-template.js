// https://maxcode.dev/problems/string-template/

function template(str, dict) {
    function replacer (placeholder, placeholderValue) {
        // const placeholderValue = placeholder.slice(1, -1); // "{city}"
        // const dictValue = dict[placeholderValue];

        if (Object.hasOwn(dict, placeholderValue)) {
            return dict[placeholderValue];
        }
        return placeholder;
    }

    // const re = /{\w+}/g;
    const re = /{(.+?)}/g;  // ? - lazy, без него - greedy
    const result = str.replaceAll(re, replacer);

    return result;
}

const obj = { toNumber: () => 5 };
Object.setPrototypeOf(obj, null);

// console.log(obj.hasOwnProperty("toNumber"));
// console.log(obj.hasOwnProperty("toString"));

const nums = [7, 9, 3, 6];

// Math.min(...nums);
// Math.min.apply(Math, nums);

Object.getPrototypeOf({}).hasOwnProperty("hasOwnProperty")
console.log(Object.prototype.hasOwnProperty.call(obj, "toNumber"))
console.log(Object.prototype.hasOwnProperty.call(obj, "toString"))

console.log(Object.hasOwn(obj, "toString"))

// console.log("toNumber" in obj);
// console.log("toString" in obj);


// console.log(template(
//     `Купить {size}-комнатную квартииру в городе {city}{5} за {price} млн рублей`,
//     { size: 2, city: "Тверь", price: 7 },
// )); //  "Купить 2-комнатную квартииру в городе Тверь за 7 млн рублей"

// console.log(template(
//     `Топ-менеджемент компании: CEO {0}, CTO {1} и CFO {2}`,
//     ["Вася", "Маша", "Петя"],
// )); // "Топ-менеджемент компании: CEO Вася, CTO Маша и CFO Петя"

// console.log(template(
//     `Купить {size}-комнатную квартииру в городе {city} за {price} млн рублей`,
//     { size: 2, price: 7 },
// )); //  "Купить 2-комнатную квартииру в городе {city} за 7 млн рублей"
