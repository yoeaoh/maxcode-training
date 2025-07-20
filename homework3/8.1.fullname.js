// https://maxcode.dev/problems/fullname/

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = `${firstName} ${lastName}`
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(newFirstName) {
        this._firstName = newFirstName;
        this._fullName = `${this._firstName} ${this._lastName}`;

        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newLastName) {
        this._lastName = newLastName;
        this._fullName = `${this._firstName} ${this._lastName}`;

        return this._lastName;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(newFullName) {
        const [newFirstName, newLastName] = newFullName.split(' ');

        this._firstName = newFirstName;
        this._lastName = newLastName;

        this._fullName = newFullName;
        return this._fullName;
    }
}


const p = new Person("Naomi", "Wang")

console.log(p.firstName) //  "Naomi"
console.log(p.lastName)  //  "Wang"
console.log(p.fullName)  //  "Naomi Wang"

p.firstName = "John"
console.log(p.fullName)  //  "John Wang"

p.fullName = "Jane Smith";
console.log(p.firstName)  //  "Jane"
console.log(p.lastName)  //  "Smith"
console.log(p.fullName)  //  "Jane Smith"
