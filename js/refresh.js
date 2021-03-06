"use strict"

document.write('Hello!');
document.querySelector('h1').style.color = 'red';

//===============================console
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

//=========================Variables var, let, const & Declaration
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

//=============================================Data Types in JS

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


//=============================Reference Data Types
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

//=======================Numbers & the Math Object
const numOne = 100;
const numTwo = 300;
let newVal;

//simple math
newVal = numOne + numTwo;
newVal = numOne * numTwo;
newVal = numOne - numTwo;
newVal = numOne / numTwo;
newVal = numOne % numTwo;

//Math. Object
newVal = Math.PI;
newVal= Math.E;
newVal = Math.round(2.4);
newVal = Math.ceil(2.4);
newVal = Math.floor(2.4);
newVal = Math.sqrt(64);
newVal = Math.abs(-3);
newVal = Math.pow(8, 2);
newVal = Math.min(2, 33, 4, 1, 55, 3, -2);
newVal = Math.max(2, 33, 4, 1, 55, 3, -2);
newVal = Math.floor(Math.random() * 20 + 1);

console.log(newVal);

//=============================String methods & Concatenation
const newFirstName = 'William';
const newLastName = 'Johnson';
const occupation = 'Software Developer';

let newName;
newName = newFirstName + newLastName;

//Concatenation
newName = newFirstName + ' ' + newLastName;

//Append
newName = 'Anthony';
newName += 'Villegas';

newName = 'Hello, my name is ' + newFirstName + ' and i am a ' + occupation;

//Escaping
newName = 'That\'s awesome, I can\'t wait';

//Length
newName = newLastName.length;

//concat()
newName = firstName.concat(' ', lastName);

//Change case
newName = firstName.toUpperCase();
newName = lastName.toLowerCase();

newName = lastName[2];

//indexOf()
newName = newLastName.indexOf('h');
newName = newLastName.lastIndexOf('s');

//charAt()
newName = newFirstName.charAt(2);

//Get last character
newName = newFirstName.charAt(newFirstName.length - 1);

//Substring
newName = newFirstName.substring(0, 4);

//slice()
newName = newFirstName.slice(0, 4);

//split()
newName = occupation.split(' ');

//replace()
newName = occupation.replace('Software', 'Web');

//includes()
newName = occupation.includes('Hello');

console.log(newName);

//=================Template Literals
const dog = 'German Shepard';
const dogAge = 4;
const gender = 'male';
const city = 'San Antonio';
let html;

//W/O template strings
html = '<ul>' +
        '<li>Dog: ' + dog + '</li>' +
        '<li>Age: ' + dogAge + ' </li>' +
        '<li>Gender: ' + gender + ' </li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';



function hello() {
    return 'My name is Spot';
}
//With template literal
html = `
<ul>
    <li>Dog: ${dog}</li>
    <li>Age: ${dogAge}</li>
    <li>Gender: ${gender}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    <li>${dogAge > 6 ? 'I\'m over six': 'I\'m under six'}</li>
</ul>
`;

document.body.innerHTML = html;

//===============================Arrays and array methods
//Create arrays
const lottery = [3, 56, 78, 22, 40, 15];
const luckyNumbers = new Array(34, 87, 2);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [88, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
let value;

//Get Array length
value = lottery.length;
//Check if is array
value = Array.isArray(lottery);
//Get single value
value = lottery[3];
//Insert into array
lottery[4] = 100;
//Find index of value
value = lottery.indexOf(78);
//Mutating arrays

//add to end
lottery.push(250);
//add to front
lottery.unshift(120);
//take from end
lottery.pop();
//take from front
lottery.shift();
//Splice values
lottery.splice(1,3)
//Reverse array
lottery.reverse()

//Concatenate array
value = lottery.concat(luckyNumbers);

//Sorting arrays
value = fruit.sort();
value = luckyNumbers.sort();

//Compare arrays
value = luckyNumbers.sort(function(x, y) {
    return x - y;
})

//Find
function under50(num) {
    return num < 50;
}
value = luckyNumbers.find(under50);

console.log(lottery);
console.log(value)

//=============================== Object literals
const book = {
    title: 'IT',
    author: 'Stephen King',
    genre: ['horror', 'thriller'],
    getPublishedYear: function() {
        return 1987;
    }
}

let bookVal;
 bookVal = book;

 //Retrieve specific value
bookVal = book.title;
bookVal = book['author'];
bookVal = book.genre[1];
bookVal = book.getPublishedYear();

console.log(bookVal);

const people = [
    {name: 'John', age: 30},
    {name: 'Jeff', age: 35},
    {name: 'Nancy', age: 39}
]

for(let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

///===================================================== Date & Times
let time;
const todayDate = new Date();
let birthday = new Date('09-10-1981');
birthday = new Date('September 10 1981');


time = todayDate.getMonth();
time = todayDate.getDate();
time = todayDate.getDay();
time = todayDate.getFullYear();
time = todayDate.getHours();
time = todayDate.getMinutes();
time = todayDate.getSeconds();
time = todayDate.getMilliseconds();
time = todayDate.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

//===============================IF STATEMENTS & COMPARISON OPERATORS
let id = 100;

//EQUAL TO
if(id == 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT')
}

//NOT EQUAL TO
if(id != 101) {
    console.log('CORRECT')
}else {
    console.log('INCORRECT')
}

//EQUAL TO VALUE & TYPE
if(id === 100) {
    console.log('CORRECT')
}else {
    console.log('INCORRECT')
}

//NOT EQUAL TO VALUE & TYPE
if(id !== 100) {
    console.log('CORRECT');
}else {
    console.log('INCORRECT');
}

if(typeof id !== 'undefined') {
    console.log(`The id is ${id}`);
} else {
    console.log('NO ID');
}

//GREATER OR LESS THAN
if(id <= 200) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

const color = 'yellow';

if(color === 'red') {
    console.log('Color is red');
} else if(color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue')
}

//LOGICAL OPERATOR
const player = 'Steve';
const jersey = 20;

if(jersey > 0 && age < 12) {
    console.log(`${player}'s number is not lucky`);
} else if(jersey >= 13 && jersey <=19) {
    console.log(`${player}'s number is lucky`);
} else {
    console.log(`${player}'s number doesnt exist`)
}

//TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//WITHOUT BRACES
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT')


//============================== SWITCH STATEMENT
switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);


//======================================= FUNCTION DECLARATIONS & EXPRESSIONS

//FUNCTION DECLARATIONS
function greet(firstName, lastName) {
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
   // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

//FUNCTION EXPRESSION
const square = function(x) {
    return x * x;
};
// console.log(square(8));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IIFE ran...');
})();

(function(name){
    console.log('Hello ' + name);
})('Matthew');

// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('Add todo...')
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}
todo.delete = function(){
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();

//================================================== GENERAL LOOPS

//FOR LOOP
// for(let i = 0; i < 10; i++){
//
//     if(i === 2) {
//         console.log('2 is my lucky number')
//         continue;
//     }
//     if(i === 5) {
//         break;
//     }
//     console.log('Number ' + i);
// }

//WHILE LOOP
// let i = 0;
// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

//DO/WHILE LOOP
// let i = 100;
// do{
//     console.log('Number ' + i);
//     i++
// } while(i < 10);

//LOOP THRU ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
    // for(let i = 0; i < cars.length; i++) {
    //     console.log(cars[i])
    // }

//FOREACH
cars.forEach(function(car,index,array) {
    console.log(`${index} : ${car}`);
    console.log(array)
});

//MAP
const users = [
    {id:1, name: 'John'},
    {id:2, name: 'Andrew'},
    {id:3, name: 'Joe'}
];
const ids = users.map(function(user) {
    return user.id;
});
console.log(ids)

//FOR/IN USING OBJECTS
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`)
}
