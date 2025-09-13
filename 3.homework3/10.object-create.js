// https://maxcode.dev/problems/object-create/

function objectCreate(prototype) {
    const newObject = {};
    Object.setPrototypeOf(newObject, prototype);
    // // Альтернативный, устаревший вариант
    // newObject.__proto__ = prototype;

    return newObject

    // // Альтернативный, устаревший вариант
    // function foo() {}
    // foo.prototype = prototype;
    //
    // return new foo();
}

const obj2 = objectCreate(null);
console.log("constructor" in obj2); // false

const obj3 = { a: 1 };
const obj4 = objectCreate(obj3);
console.log(obj4.a === 1);

console.log(objectCreate(null))

