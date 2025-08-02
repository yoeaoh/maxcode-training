// https://maxcode.dev/problems/nouveau/

function nouveau(constructorFn, ...args) {
    const newObject = Object.create(constructorFn.prototype);
    const result = constructorFn.apply(newObject, args);

    // Проверка на примитив
    // if (result === Object(result)) {
    if (typeof result === "object" && result !== null || typeof result === "function") {
        return result;
    }

    return newObject;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    return `Я ${this.name}, мне ${this.age}, и я учу джаваскрипт.`;
};

const petya = nouveau(Person, "Петя", 25);
console.log(petya.name); // Петя
console.log(petya.age); // 25
console.log(petya.hello()); // Я Петя, мне 25, и я учу джаваскрипт.
