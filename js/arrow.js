"use strict"

//Regular function expression
// const sayHello = function() {
//     console.log('Hello');
// }

//Arrow syntax
// const sayHello = () => {
//     console.log('Hello')
// }

//One line
// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';

//Return object literal using arrow function
// const sayHello = () => ({msg: 'Hello'});

//Single parameter requires no parenthesis
// const sayHello = name => console.log(`Hello ${name}`)

//Multiple parameters require parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


// sayHello('Anthony', 'Villegas');


const users = ['Joe', 'George', 'Matthew'];

// const nameLengths = users.map((name) => {
//     return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths)
