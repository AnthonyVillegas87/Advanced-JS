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

   //Make HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });


    }


}