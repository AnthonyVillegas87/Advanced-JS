"use strict"

const posts = [
    {title: 'Post One', body: 'This is a post'},
    {title: 'Post Two', body: 'This is a post too'}
];

// function createPost(post) {
//    setTimeout(function() {
//        posts.push(post);
//    }, 2000);
// }
//
//
// function getPosts() {
//  setTimeout(function() {
//      let output = '';
//      posts.forEach(function(post) {
//          output += `<li>${post.title}</li>`
//      });
//      document.body.innerHTML = output;
//  }, 1000)
// }
//
// createPost({title: 'Post Three', body: 'This is another post'});
//
// getPosts();

function createPost(post) {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            let error = false;

            if(!error) {
                resolve();
            } else {
               reject('Error: Something went wrong')
            }
            resolve();
        }, 2000);
    })


}


function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({title: 'Post Three', body: 'This is another post'})
    .then(getPosts)
    .catch(function(err) {
        console.log(err)
    });