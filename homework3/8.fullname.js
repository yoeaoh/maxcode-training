// https://maxcode.dev/problems/fullname/

function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName = `${this._firstName} ${this._lastName}`

    Object.defineProperty(this, "firstName", {
        get() {
            return this._firstName;
        },
        set(newFirstName) {
            this._firstName = newFirstName;
            this._fullName = `${this.firstName} ${this.lastName}`;
            return this._firstName;
        }
    })

    Object.defineProperty(this, "lastName", {
        get() {
            return this._lastName;
        },
        set(newLastName) {
            this._lastName = newLastName;
            this._fullName = `${this.firstName} ${this.lastName}`;
            return this._lastName;
        }
    })

    Object.defineProperty(this, "fullName", {
        get() {
            return this._fullName;
        },
        set(newFullName) {
            const [newFirstName, newLastName] = newFullName.split(' ');

            this._firstName = newFirstName;
            this._lastName = newLastName;
            this._fullName = newFullName;

            return this.fullName;
        }
    })
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
