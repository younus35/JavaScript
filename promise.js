console.log('person1:shows ticket')
console.log('person2:shows ticket')
const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('ticket');
    },3000)
}); 

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('wife:here is the ticket')
    console.log('husband:we should go in');
    console.log('wife:no i am hungry')
    return new Promise((resolve,reject)=> resolve(`${t} popcorn`));
});
const getButter =getPopcorn.then((t)=>{
    console.log('i got some popcorn')
    console.log('husband:we should go in');
    console.log('wife:no i need butter on my popcorn')
    return new Promise((resolve,reject)=> resolve(`${t} butter`));
});
getButter.then((t)=> console.log(t));
console.log('person4:shows ticket')
console.log('person5:shows ticket')