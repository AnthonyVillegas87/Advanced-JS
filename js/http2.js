"use strict"

const http = new EasyHTTP();

// GET users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));


//User Data
const data = {
    name: 'Jason Mccarthy',
    username: 'jmac',
    email: 'jmc@gmail.com'
}

//Create POST
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
