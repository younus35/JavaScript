<p>I want you to create a new function called updateLastUserActivityTime which returns a promise, we will use this function to update the user's last activity time, and when it will resolve, it should send back the updated last activity time for the user (it should take 1 second to execute).
Every time the user creates a post, updateLastUserActivityTime should be called so that the user's last activity time gets updated.
.When both the promises resolve (createPost and updateLastUserActivityTime ),
I want you to console log all the posts and lastActivityTime of the user. [If stuck for long watch the hint 2]
Once both the above promises are resolved, I want you to delete the last post by calling the deletePost promise. Once successfully deleted, I want you to log the remaining Posts.</p>
const posts = ["start"] //here const is refering to the reference of an array so we can push elements to the array 
const users = {name:"younus",activityTime:new Date().toISOString()};
function updateLastUserActivityTime(){
    return new Promise(function(resolve,reject){
           setTimeout (function (){
            const lastActivityTime = new Date().toISOString();
           //console.log('Last Active Time',lastActivityTime);
            users.activityTime = lastActivityTime;
            resolve();
           },1000);
    });
}
function createPost(){
    return new Promise(function(resolve){
        const post = "end"
        posts.push(post);
        resolve();
    });
}
function printAll(){
    
        console.log(posts);
    
}
function lastTime(){
    console.log(users.activityTime);
}
function deletePost(){
    return new Promise(function(resolve){
         posts.pop();
        resolve();
    });
}
Promise.all([createPost(),updateLastUserActivityTime()])
.then(function (){
     printAll();
     lastTime();
})
.then(function (){
    return deletePost();
})
.then(function (){
    return printAll();
})
