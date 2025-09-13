// https://maxcode.dev/problems/fullname/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Object.defineProperty(Person.prototype, "fullName", {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(newFullName) {
        [this.firstName, this.lastName] = newFullName.split(' ');
    }
})


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        this.xxx4 = 123
    }

    xxx1 = function() {}
    xxx2 = () => {}
    xxx3 = 123

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newFullName) {
        [this.firstName, this.lastName] = newFullName.split(' ');
    }
}


const p = new Person("Naomi", "Wang")
const p2 = new Person("Naomi", "Wang")


p.hello();
p.fullName

console.log(p.firstName) //  "Naomi"
console.log(p.lastName)  //  "Wang"
console.log(p.fullName)  //  "Naomi Wang"

p.firstName = "John"
console.log(p.fullName)  //  "John Wang"

p.fullName = "Jane Smith";
console.log(p.firstName)  //  "Jane"
console.log(p.lastName)  //  "Smith"
console.log(p.fullName)  //  "Jane Smith"
