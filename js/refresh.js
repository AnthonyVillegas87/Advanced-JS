"use strict"

document.write('Hello!');
document.querySelector('h1').style.color = 'red';

//console
// The console object provides access to the browser's debugging console (e.g. the Web console in Firefox).
// The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.
// Log to Console

/*String*/console.log("Hello World!")
/*Number*/console.log(123);
/*Boolean*/console.log(false)
/*Array*/console.log([1,2,3])
/*Object Literal*/console.log({a:1, b:2})

// Console.table
console.table({a:1, b:2})

//Console.error
console.error('This is an error!')

//Console.clear
console.clear();

//Console.warn
console.warn('This is a warning!!');

//Console.time
console.time('Hello...')

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

console.time('Hey!')

//Variables var, let, const & Declaration
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init VAR
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// LET
let firstName;
firstName = 'Ray';
console.log(firstName);

// CONST
const lastName = 'Corona';
console.log(lastName);
//CANNOT RE-ASSIGN

const person = {
    name: 'Joe',
    age: 33
}
console.log(person);
person.name = 'Sara';
person.age = 32

const numbers = [1,2,3,4,5];
console.log(numbers)
numbers.push(6);
console.log(numbers);

