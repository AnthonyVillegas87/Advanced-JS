"use strict"
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }
    calculateAge() {
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
      return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');
mary.getsMarried('Thompson');
console.log(mary);

console.log(Person.addNumbers(1, 3));

class Customer extends Person {
    constructor(firsName, lastName, phone, membership) {
        super(firsName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
static  getMembershipCost() {
        return 500;
}

}

const john = new Customer('John', 'Doe', '123-123-1234', 'Standard')
console.log(john.greeting());
console.log(Customer.getMembershipCost());