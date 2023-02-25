
// // promises

// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const promiseWifeBringingTicket  = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000);
// })

// const getPopCorn = promiseWifeBringingTicket.then((t) => {
//     console.log('wife: I have tickets');
//     console.log('husband: lets go');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// })

// const getButter = getPopCorn.then((t) => {
//     console.log('husband: i got popcorn');
//     console.log('husband: let go in');
//     console.log('wife: no I need butter on popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
// })

// const getDrink = getButter.then((t) => {
//     console.log('husband: i got coldDrink');
//     console.log('wife: lets go we are getting late');
//     return new Promise((resolve, reject) => resolve(`${t} coldDrink`));
// })

// getDrink.then((t) => console.log(t));

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");


// async await

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async() => {

    const promiseWifeBringingTicket  = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    
    const getPopCorn = new Promise((resolve, reject) => resolve('popcorn'));

    const getButter = new Promise((resolve, reject) => resolve('butter'));

    const getDrink = new Promise((resolve, reject) => resolve('coldDrink'));

    let ticket = await promiseWifeBringingTicket;

    console.log(`wife: I have ${ticket}`);
    console.log('husband: lets go');
    console.log('wife: no i am hungry');

    let popcorn = await getPopCorn;

    console.log(`husband: i got ${popcorn}`);
    console.log('husband: let go in');
    console.log('wife: no I need butter on popcorn');
    
    let butter = await getButter;
    console.log(`husband: i got ${butter} on popcorn`);
    console.log('husband: let go in');
    console.log('wife: no I need coldDrink');

    let drink = await getDrink;
    console.log(`husband: i got ${drink}`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for reminder');

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");