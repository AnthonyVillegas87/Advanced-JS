"use strict"
//Object
//     const joe = {
//         name: 'Joe',
//         age: 30
//     }

//Person Constructor
function Person(name, dob) {
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
      const difference = Date.now() - this.birthday.getTime();
      const ageDate = new Date(difference);
      return Math.abs(ageDate.getUTCFullYear() - 1984);
    }
    console.log(this);
}

// const joe = new Person('Joe', 33);
// const john = new Person('John', 50);

const george = new Person('George', '9-10-1981');
console.log(george.calculateAge())

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
