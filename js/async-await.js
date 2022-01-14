"use strict"

// async function myFunc() {
//
//
//     const promise = new Promise((resolve, reject) => {
// setTimeout(() => resolve('Hello!!!!!!!!'), 1000);
//     })
//
//     const error = false;
//     if(!error) {
//         const response = await promise;// Wit until promise is resolved
//         return response;
//     } else {
//         await Promise.reject(new Error('Intervening against document.write'))
//     }
//
//
// }
//
// myFunc()
// .then(response => document.write(response))
//     .catch(error => console.log(error));

async function getUsers() {
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //only proceed once its resolved
    const data = await response.json();

    //only proceed once second promise is resolved
    return data;
}

getUsers()
    .then(users => console.log(users));