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
console.log(val)*/

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









