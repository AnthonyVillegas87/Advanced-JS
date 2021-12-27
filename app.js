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


//Creating elements
const li = document.createElement('li');
 //Add class
li.className = 'collection-item';
//Add id
li.id = 'new-item';
//Add attribute
li.setAttribute('title', 'New Item');

//Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//Create new link element
const link = document.createElement('a');
//Add classes
link.className = 'delete-item secondary-content';
//Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append link to li
li.appendChild(link);

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li)


//Replace Elements

//Create Element
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
//Get old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');
//Replace
cardAction.replaceChild(newHeading, oldHeading);


//Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

//remove child element
list.removeChild(lis[3]);

//Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val)


document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    let val;
    val = e;

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //Event type
    val = e.type;

    //Timestamp
    val = e.timeStamp;
    //Coords event relative to the window
    val = e.clientY;
    val = e.clientX;
    //Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val)
}
*/


// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

//Click Event
 //clearBtn.addEventListener('click', runEvent);
//Double click Event
 //clearBtn.addEventListener('dblclick', runEvent);

//Mousedown
 //clearBtn.addEventListener('mousedown', runEvent);
//Mouseup
 //clearBtn.addEventListener('mouseup', runEvent);
//Mouseenter
 //clearBtn.addEventListener('mouseenter', runEvent);
//Mouseleave
 //clearBtn.addEventListener('mouseover', runEvent);
//mouseover
 //card.addEventListener('mouseover', runEvent);
//mouseout
 //card.addEventListener('mouseout', runEvent);
//mousemove
 //card.addEventListener('mousemove', runEvent);
//Event Handler
// function runEvent(e) {
//     console.log(`Event Type: ${e.type}`);
//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// }

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
//clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

//Keydown
 //taskInput.addEventListener('keydown', runEvent);
//Keyup
 //taskInput.addEventListener('keyup', runEvent);
//Keypress
 //taskInput.addEventListener('keypress', runEvent);
//Focus
 //taskInput.addEventListener('focus', runEvent);
//Blur
 //taskInput.addEventListener('blur', runEvent);
//Cut
 //taskInput.addEventListener('cut', runEvent);
//Paste
 //taskInput.addEventListener('paste', runEvent);
//Input
taskInput.addEventListener('input', runEvent);
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    // console.log(e.target.value);

    // heading.innerText = e.target.value;
    // console.log(taskInput.value)
    //
    // e.preventDefault();
}