class Customer {
    firstName: string | undefined;
    lastName: string | undefined;

    greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer();
customer.firstName = "Soman";
customer.lastName = "Ahmad";
customer.greeter();