export class Customer {
    firstName;
    lastName;
    _age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    greeter() {
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
    }
    GetAge() {
        console.log(`Age: ${this._age}`);
        return this._age;
    }
}
