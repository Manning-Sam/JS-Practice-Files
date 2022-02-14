// Comments explain why and how code is written not 
console.log('hello world')

//Variables:
let name = 'Mosh';
console.log(name);
//Cannot be reserved keyword
//Should be meaningful and descriptive (what is the purpose, what type of data is stored)
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive

//multiple variables
let firstName = 'Mosh';
let lastName = 'Hamedani';      

//Constant variables are immutable; this will throw an error
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//Primitive Types
let name = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal true or false
let firstName = undefined;
let lastName = null; //want to explicitly clear the value of a variable

//Objects
let person = {
    name: 'Mosh',
    age: 30
};
//Dot Notation
person.name = 'John';
//Bracket Notaion
person['name'] = 'Mary'; 

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; 
selectedColors[3] = 1;

//Functions
//Performing a task
function greet() {
    console.log('Hello World');
}
function greet(name) {
    console.log('Hello ' + name);
}
//Calculating a Value
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
//or
console.log(square(2));