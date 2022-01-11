
const http = new EasyHTTP();

//GET posts
//  http.get('https://jsonplaceholder.typicode.com/posts' ,
//      function(error, response) {
//      if(error) {
//          console.log(error);
//      } else {
//          console.log(response);
//      }
//  });

//Create data
const data = {
    title: 'Custom Post',
    body: 'This is a new post'
};

//create new post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
//     if(error) {
//          console.log(error);
//      } else {
//          console.log(post);
//      }
// });

//Update post
// http.put('https://jsonplaceholder.typicode.com/posts/6', data, function(error, post) {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(post)
//     }
// })

//Delete post

 http.delete('https://jsonplaceholder.typicode.com/posts/1' ,
     function(error, response) {
     if(error) {
         console.log(error);
     } else {
         console.log(response);
     }
 });