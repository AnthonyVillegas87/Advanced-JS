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

//Update POST
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));


//DELETE User
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(error => console.log(error));

