// https://maxcode.dev/problems/string-template/

function template(str, dict) {
    function replacer (placeholder) {
        const placeholderValue = placeholder.replace(/\{|\}/g, "");
        const dictValue = dict[placeholderValue];

        if (dictValue === undefined) return placeholder;
        return dictValue;
    }

    const re = /\{\w+\}/g;
    const result = str.replaceAll(re, replacer);

    return result;
}


console.log(template(
    `Купить {size}-комнатную квартииру в городе {city} за {price} млн рублей`,
    { size: 2, city: "Тверь", price: 7 },
)); //  "Купить 2-комнатную квартииру в городе Тверь за 7 млн рублей"

console.log(template(
    `Топ-менеджемент компании: CEO {0}, CTO {1} и CFO {2}`,
    ["Вася", "Маша", "Петя"],
)); // "Топ-менеджемент компании: CEO Вася, CTO Маша и CFO Петя"

console.log(template(
    `Купить {size}-комнатную квартииру в городе {city} за {price} млн рублей`,
    { size: 2, price: 7 },
)); //  "Купить 2-комнатную квартииру в городе {city} за 7 млн рублей"
