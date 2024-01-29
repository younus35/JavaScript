const posts = [];
const user = {name:"userName", activityTime:new Date().toISOString()};

function createPost() {
  return new Promise((resolve) => {
    
    setTimeout(() => {
      const post = { id: Math.random(), content: "New post" };
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}


function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    
    setTimeout(() => {
      const lastActivityTime = new Date().toISOString();
      console.log(`Last activity time updated: ${lastActivityTime}`);
      user.activityTime = lastActivityTime;
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}


    // Promise.all([createPost(),updateLastUserActivityTime()])
    // .then(([post,lastactivityTime])=>{
    //   console.log(post,lastactivityTime);
    // }).then(()=> deletePost())
    // .then(()=>console.log(posts));
    async function userAction(){
      const [post, lastactivityTime] = await Promise.all([createPost(),updateLastUserActivityTime()]);
      console.log(post);
    }