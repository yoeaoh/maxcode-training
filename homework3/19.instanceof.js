// https://maxcode.dev/problems/instanceof/

// Прошло только половину тестов.
function isInstanceOf(obj, clazz) {
    if (typeof clazz !== "function") {
        console.log('Right-hand side of \'instanceof\' is not an object!');
        return;
        // throw new Error('Right-hand side of \'instanceof\' is not an object!');
    }

    let currentPrototype = Object.getPrototypeOf(obj);

    while (currentPrototype !== null) {
        if (currentPrototype === clazz.prototype) {
            return true;
        }

        currentPrototype = Object.getPrototypeOf(currentPrototype);
    }

    return false;
}

class A {}
class B extends A {}
class C {}

const b = new B()

console.log(isInstanceOf(b, B));        // true
console.log(isInstanceOf(b, A));        // true
console.log(isInstanceOf(b, Object));   // true

console.log(isInstanceOf(b, C));        // false
console.log(isInstanceOf(b, Array));    // false

console.log(isInstanceOf({}, {}));
// Бросает ошибку с текстом
// "Right-hand side of 'instanceof' is not an object!"
// так как правый операнд не яявляется функцией
