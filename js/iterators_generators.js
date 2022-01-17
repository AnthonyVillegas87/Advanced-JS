"use strict"
// ITERATOR EXAMPLE
function nameIterator(names) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < names.length ?
                {value : names[nextIndex++], done: false} :
                {done: true}
        }
    }
}
//CREATE ARRAY OF NAMES
const namesArray = ['Jack', 'Jill', 'John', 'Matthew', 'Joe'];
//INIT ITERATOR & PASS NAMES ARRAY
const names = nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

//GENERATOR FUNCTION EXAMPLE
//YIELD MULTIPLE VALUES
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'Matthew';
}
const name = sayNames();
console.log(name.next());
console.log(name.next().value);

//ID CREATOR
function* createIds() {
    let index = 0;

    while(true) {
        yield index++
    }
}

const gen = createIds();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)