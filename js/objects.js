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