//MAPS = KEY-VALUE PAIRS - CAN USE ANY TYPE AS A KEY OR VALUE

const map1 = new Map();
//Set keys
const key1 = 'some string',
    key2 = {},
    key3 = function(){};

//SET MAP VALUES BY KEY
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

//GET VALUES BY KEY
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));
console.log(map1.size);

//ITERATING THRU MAPS
//for...of w/ KEY:VALUE
for(let [key, value] of map1) {
    console.log(`${key} = ${value}`)
}

for(let key of map1.keys()) {
    console.log(key);
}

//forEach
map1.forEach(function(value, key) {
    console.log(`${key}:${value}`)
});

//CONVERT TO ARRAY

//IN PAIRS
const keyValArr = Array.from(map1);
console.log(keyValArr);

//VALUES ONLY
const valArr = Array.from(map1.values());
console.log(valArr);

//KEYS ONLY
const keyArr = Array.from(map1.keys());
console.log(keyArr);