"use strict"
//WINDOW METHODS OBJECTS & PROPERTIES

//ALERT
    //alert('hello world!')

//PROMPT
    //const input = prompt();
    //alert(input);

//CONFIRM
//     if(confirm('Are you sure')) {
//         console.log('YES')
//     }   else {
//         console.log('NO')
//     }

let val;
//OUTER HEIGHT & WIDTH
val = window.outerHeight;
val = window.outerWidth;

//INNER HEIGHT & WIDTH
val = window.innerHeight;
val = window.innerWidth;

//SCROLL POINTS
val = window.scrollY;

//LOCATION OBJ
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//REDIRECT
// window.location.href = 'https://google.com'

//HISTORY OBJ
 window.history.go(-1);
val = window.history.length;

//NAVIGATOR OBJ
val = window.navigator;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



 console.log(val);