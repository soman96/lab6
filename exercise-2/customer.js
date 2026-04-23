"use strict";
class Customer {
    firstName;
    lastName;
    greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
let customer = new Customer();
customer.firstName = "Soman";
customer.lastName = "Ahmad";
customer.greeter();
