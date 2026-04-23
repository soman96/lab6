"use strict";
class Customer {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
let customer = new Customer("Soman", "Ahmad");
customer.greeter();
