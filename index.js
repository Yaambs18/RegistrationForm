// variables, String

/* let name = "Yansh";
let age = 23;
let address = "Aligarh";

let printDetails = `My name is ${name} age is ${age} address is ${address}`;
console.log(printDetails);

console.log("personal details = My name is ",name, "age is", age," address is", address);

var str = 'My name is Yansh, age is 23, address is Aligarh';
console.log(str.split(','))

console.log(str.split('').reverse().join(''));
*/


// Arrays

/*const fruits = ['apples', 'oranges'];
console.log(fruits[1]);

fruits.push('banana');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits);
*/

// objects 

const person = {
    firstName: 'Yansh',
    lastName: 'Bhardwaj',
    age: 22,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'gms',
        city: 'Aligarh'
    }
}

// console.log(person);

/* 
console.log(person.hobbies);
const {firstName, lastName, address: {city}} = person;
console.log(firstName);
console.log(city);
person.email = 'abc@xyz.com';
console.log(person);
*/

// json
// console.log(JSON.stringify(person));

const todos = [
    {
        id: 1,
        text: 'Meeting with Family',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Meeting with Friends',
        isCompleted: false
    }
]

// todos.forEach(function(todo){
//     console.log(todo.text);
// })

// const todosText = todos.map(function(todo){
//     return todo.text;
// })
// console.log(todosText);

// const todosCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// })
// console.log(todosCompleted);



// class 
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("yansh", "sharma", 01-01-2000);
const person2 = new Person("vaibhav", "prasad", 01-01-200);

console.log(person1.getFullName());





// inheritance

class User{
    static count = 0;
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
      User.count++
    }
    printNumberOfUsers(){
        console.log("currentnumberofusers =", User.count)
    }
    

}

class Member extends User {
  constructor(username, email, password ) {
      
    super(username, email, password);     // complete the super function only. Do not make any other changes
    
    this.membershipactivetilldate = new Date(2023, 2, 3)//assume user has joined ur platform on 3rd March
    this.package = '';
  }
  
    //Based on the package bought, increase the membershipactivetilldate
    //Monthly membership increases the va1idity by 1 month
    //Yearly membership increases the va1idity by 1 year
  purchaseMembership(membershippackagename) {
      
    //   Complete this function
    if(membershippackagename==='YEARLYPACKAGE'){
        this.membershipactivetilldate.setFullYear(this.membershipactivetilldate.getFullYear()+1);
    }
    else{
        this.membershipactivetilldate.setMonth(this.membershipactivetilldate.getMonth()+1);
    }
      
 
  }

  subscriptionActiveTill() {
    console.log(
      this.username +
        " is subscribed to " +
        this.package +
        "uptill" +
        this.membershipactivetilldate.toDateString()
    );
  }

}

function createNewStudents(username, email, password, membershippackagename){
    const mike = new Member(username, email, password);  
    mike.purchaseMembership(membershippackagename);
    mike.subscriptionActiveTill();

}

createNewStudents("pyash", "yash@gmail.com" , "password123" ,"YEARLYPACKAGE");