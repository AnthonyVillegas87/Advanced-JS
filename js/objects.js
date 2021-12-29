"use strict"
//Object
//     const joe = {
//         name: 'Joe',
//         age: 30
//     }

//Person Constructor
//     function Person(name, dob) {
//         this.name = name;
//         //this.age = age;
//         this.birthday = new Date(dob);
//         this.calculateAge = function() {
//           const difference = Date.now() - this.birthday.getTime();
//           const ageDate = new Date(difference);
//           return Math.abs(ageDate.getUTCFullYear() - 1984);
//         }
//         console.log(this);
//     }

// const joe = new Person('Joe', 33);
// const john = new Person('John', 50);

    // const george = new Person('George', '9-10-1981');
    // console.log(george.calculateAge())

//Strings
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(typeof name2);

//Numbers
const num1 = 5;
const num2 = new Number(5);
console.log(num2);

//Boolean
const bool = true;
const bool2 = new Boolean(true);
console.log(bool2)

//Objects
const james = {name: 'James'};
const james1 = new Object({name: "James"});

//Regular Expressions
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');

//Object.prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const difference = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(difference);
    //     return Math.abs(ageDate.getUTCFullYear() - 1984);
    // }
    console.log(this);
}

//Get Full Name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Get married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const javier = new Person('Javier', 'Ruedas', '8-12-1974');
const mary = new Person('Mary', 'Joe', '4-18-1980');

console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName())

//Prototypal inheritance

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Matthew', 'Baker');
console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);
//Make customer.prototype return customer
Customer.prototype.constructor = Customer;
//Create customer
const customer1 = new Customer('Jay', 'Warnke', '123-123-1233', 'Standard');
console.log(customer1);
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company!`
}

console.log(customer1.greeting());

//Create Objects
const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const henry = Object.create(personPrototypes);
henry.firstName = ' Henry';
henry.lastName = 'Gibbs';
henry.age = 30;

henry.getsMarried('Thompson');

console.log(henry.greeting())

const jordan = Object.create(personPrototypes, {
    firstName: {value: 'Jordan'},
    lastName: {value: 'Lafoe'},
    age: {value: 32}
});

console.log(jordan);
console.log(jordan.greeting());