"use strict"

class EasyHTTP {

    //Make HTTP GET request
   // get(url) {
   //     return new Promise((resolve, reject) => {
   //         fetch(url)
   //             .then(result => result.json())
   //             .then(data => resolve(data))
   //             .catch(error => reject(error));
   //     });
   //
   //
   // }

    //Using async/await
    async get(url) {
        const response = await fetch(url);

        const responseData = await response.json();
        return responseData;
    }




   //Make HTTP POST request
   //  post(url, data) {
   //      return new Promise((resolve, reject) => {
   //          fetch(url, {
   //              method: 'POST',
   //              headers : {
   //                  'Content-type' : 'application/json'
   //              },
   //              body: JSON.stringify(data)
   //          })
   //              .then(result => result.json())
   //              .then(data => resolve(data))
   //              .catch(error => reject(error));
   //      });
   //
   //
   //  }

    //Using async/await
   async post(url, data) {

         const response = await fetch(url, {
                method: 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            });

          const responseData = await response.json();
          return responseData;
    }





    //Make an HTTP PUT Request
    // put(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers : {
    //                 'Content-type' : 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(result => result.json())
    //             .then(data => resolve(data))
    //             .catch(error => reject(error));
    //     });
    //
    //
    // }
    //Using async/await

   async put(url, data) {

      const response = await fetch(url, {
                method: 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            });
      const responseData = await response.json();
      return responseData;
    }




    //Make an HTTP DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .then(() => resolve('Resource Deleted...'))
                .catch(error => reject(error));
        });


    }

}