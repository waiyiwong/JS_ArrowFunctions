/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers (a,b) {
//     return a + b;
// }
// let sum = addTwoNumbers(1,2);
// console.log(sum);

// Arrow Function With Parameters (ES6)
const addTwoNumbers = (a,b) => {
    return a + b;
}
let sum = addTwoNumbers(1,2);
console.log(addTwoNumbers(1,2));

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => a + b;
const addTwoNumbers3 = (a,b) => (a + b); //also valid
console.log(addTwoNumbers2(1,2));
console.log(addTwoNumbers3(1,2));

// Implicit Returns
const saySth = message => console.log(message);
saySth("Hey");

const sayHi = () => console.log("Hi");
sayHi();

// Returning Multiple Lines
const multipleLine = () => (
    `<p>
    Hello
    </p>`
)
console.log(multipleLine());
