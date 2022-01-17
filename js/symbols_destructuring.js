
//OBJECT PROPERTY IDENTIFIERS
//CREATE A SYMBOL
const symbol1 = Symbol();

console.log(typeof symbol1);

//UNIQUE OBJECT KEYS
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

//Symbols are not enumerable in for....in
for(let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

//Symbols ignored by JSON.stringify
console.log(JSON.stringify({key:'prop'}));
console.log(JSON.stringify({[Symbol('sym1')] : 'prop'}));

//DESTRUCTURING ASSIGNMENT
let a, b;
 //[a, b] = [100, 200];
//REST PATTERN
 //[a, b, ...rest] = [100, 200, 300, 400, 500];

 //({a, b} = {a:100, b:200, c:300, d:400, e:500})
({a, b, ...rest} = {a:100, b:200, c:300, d:400, e:500});


//ARRAY DESTRUCTING
const people = ['John', 'Beth', 'Mike'];
 //const [person1, person2, person3] = people;



//PARSE ARRAY RETURNED FROM FUNCTION
function getPeople() {
    return ['John', 'Beth', 'Mike'];
}
let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3);


//OBJECT DESTRUCTURING
const person = {
    name : 'George Tudor',
    age: 39,
    city: 'Miami',
    gender: 'Male',
     sayHello: function() {
        console.log('Hello')
    }
}

//ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;

//ES6
const {name, age, city, sayHello} = person;
console.log(name, age, city);
sayHello();