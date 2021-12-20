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

//Data Types in JS

//Primitive Data Types (6 all together)

/*
* Stored directly in the location the variable accesses
* Stored in the stack
*
* String
* Number
* Boolean
* Null
* Undefined
* Symbols(ES6)
*/

const fullName = 'Joe Dirt';
console.log(typeof fullName);

const age = 22;
console.log(typeof age);

const hasKids = true;
console.log(typeof hasKids);

const car = null;
console.log(typeof car);

let test;
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym);


//Reference Data Types
/*
* Accessed by reference
* Objects that are stored on the heap
* A pointer to a location in memory
*
* Arrays
* Object literals
* Functions
* Dates
*/

const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(address)

const today = new Date();
console.log(today);
console.log(typeof today);

//Type Conversion
let val;

// Number to String
val = String(5);
val = String(4 + 4)

//Boolean to a String
val = String(true);

//Date to String
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

//toString() method
val = (5).toString();
val = (true).toString();

//String to numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100');
val = parseFloat('100.30');

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

//Type Coercion
const valOne = String(5);
const valTwo = 6;
const sum = valOne + valTwo;

console.log(sum);
console.log(typeof sum);
