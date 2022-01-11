
const http = new EasyHTTP();

//GET posts
 http.get('https://jsonplaceholder.typicode.com/posts' ,
     function(error, response) {
     if(error) {
         console.log(error);
     } else {
         console.log(response);
     }
         console.log(response);
     });