// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// Everything is an Object

// console.log(typeof balance);
// console.log(typeof anotherBalance);


// Boolean
let isActive = true;
let isReallyActive = new Boolean(true) // not recommended

// null and undefined

let firstname=null;
let lasttname=null;
// console.log(firstname);
// console.log(lastname);

// String

let myString = "hello";
let myStringOne = 'Hola';
let username = 'abhinav';

let oldGreet = myString + " " + "abhinav";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2*2}`;
console.log(greetMessage);
console.log(demoOne);

let sm1 = Symbol("abhinav");
let sm2 = Symbol("abhinav");

console.log(sm1==sm2);
