"use strict"

const http = new EasyHTTP();

//GET users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));

