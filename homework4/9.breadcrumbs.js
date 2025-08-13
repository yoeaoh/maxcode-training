// https://maxcode.dev/problems/breadcrumbs/


// Вроде бы почти работает, но я не понял, что мне нужно возвращать из рекурсии, чтобы выйти из неё..
// Как бы нужно отдавать что-то из рекурсии, чтобы её продолжить, т.к. мы не знаем, где именно будет категория
// При этом, если отдавать на каждом шаге, то мы можем вернуть не то..
function breadcrumbs({id, name, children}, targetId, previousPath = []) {
    let currentPath = [...previousPath, name];

    for (const item of children) {
        breadcrumbs(item, targetId, currentPath);

        // console.log(test);
    }

    if (id === targetId) {
        console.log('result', [...previousPath, name]);
        // return [...previousPath, name];
    }

    // return currentPath;
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
