console.log('person1:shows ticket')
console.log('person2:shows ticket')
const preMovie = async ()=>{//async always returns a promise
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('ticket');
        },3000)
    }); 
    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
    const getButter = new Promise((resolve,reject)=> resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject)=> resolve('cool drinks'))
    // or let [popcorn, butter, drinks] = await promise.all([getPopcorn, getButter, getColdDrinks]) then no need of below code until return statment
   let ticket = await promiseWifeBringingTicks;
   console.log(`wife:here is the ${ticket}`)
   console.log('husband:we should go in');
   console.log('wife:no i am hungry')
   let popcorn = await getPopcorn;
   console.log(`husband:i got some ${popcorn}`)
   console.log('husband:we should go in');
   console.log('wife:no i need butter on my popcorn')
   let butter = await getButter;
   console.log(`husband:i got some ${butter}`)
   console.log('husband:we should go in');
   console.log('wife:no i need cool drinks with my popcorn')
   let drinks = await getColdDrinks;
   console.log(`husband:i got some ${drinks}`)
   console.log('husband:any thing else darling')
   console.log('wife:lets go we are getting late')
   console.log('husband:thank you for the reminder *grins*')
   return ticket;
}
preMovie().then((m)=> console.log(`person3: shows ${m}`))
console.log('person4:shows ticket')
console.log('person5:shows ticket')