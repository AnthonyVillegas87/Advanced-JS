"use strict"

class EasyHTTP {

    //Make HTTP GET request
   get(url) {
       return new Promise((resolve, reject) => {
           fetch(url)
               .then(result => result.json())
               .then(data => resolve(data))
               .catch(error => reject(error));
       });


   }
}