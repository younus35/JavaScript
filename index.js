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