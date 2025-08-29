// https://maxcode.dev/problems/breadcrumbs/

// Тут я, кажется, понял принцип, что мы начинаем получать результаты
// рекурсии с конца, поэтому можно ссылаться на результат выполнения,
// и от него отталкиваться
function breadcrumbs(catalog, id) {
    const result = [];

    if (catalog.id === id) {
        result.push(catalog.name)
    }

    for (const item of catalog.children) {
        const currentResult = breadcrumbs(item, id);

        if (currentResult.length !== 0) {
            result.push(catalog.name)
            result.push(...currentResult);
        }
    }

    return result;
}

const catalog = {
    id: "1",
    name: "Электроника",
    children: [
        {
            id: "2",
            name: "Товары для компьютера",
            children: [
                { id: "3", name: "Оперативная память", children: [] },
                { id: "4", name: "Процессоры", children: [] },
            ],
        },
        { id: "5", name: "Мобильные телефоны", children: [] },
    ],
};

console.log(breadcrumbs(catalog, "1"));
// ["Электроника"]

console.log(breadcrumbs(catalog, "3"));
// ["Электроника", "Товары для компьютера", "Оперативная память"]

console.log(breadcrumbs(catalog, "5"));
// ["Электроника", "Мобильные телефоны"]
