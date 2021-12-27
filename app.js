"use strict"
/*
let val;

val = document;
val = document.all;
val = document.all[5];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.scripts;

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'))
});
console.log(val)

// document.getElementById()
console.log(document.getElementById('task-title'));

//Change styling
document.getElementById('task-title').style.background = '#344';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

//Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color: red">Task List</span>'

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').style.color = 'green';

//document.getElementsByClassName()

const items = document.getElementsByClassName('collection-item');
console.log(items)

items[0].textContent = 'Hello';
items[1].textContent = 'World';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems)

//document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis)

//convert HTML collection into array
lis = Array.from(lis)
lis.reverse();


lis.forEach(function(li) {
    console.log(li.className);
    li.textContent = 'Grocery Item';
})

console.log(lis)

//document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');
items.forEach(function(item, index) {
    item.textContent = `${index}: Hello`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);
*/

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;


//Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = ' Hello';
//Children of children
val = list.children[3].children[0];
//firstChild
val = list.firstChild;
val = list.firstElementChild;
//lastChild
val = list.lastChild;
val = list.lastElementChild;
//countChildElements
val = list.childElementCount;
//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
//get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val)



