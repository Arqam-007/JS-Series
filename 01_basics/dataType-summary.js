// #Primitve Data Types
// Primitive data types in JavaScript include 7 types: String, Number, Boolean, null, undefined, Symbol, and BigInt(for big or scientific values).

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); // false, because symbols are unique

// #Reference (Non Primitive) data types include: Objects, Arrays, Functions.
// there return is always object, And the return of function is called object function .

const heros = ['superman', 'batman', 'spiderman'];
let myObj = {
  name: 'Arqam',
  age: 23,
};

const myFunction = function () {
  console.log('Hello World');
};
console.log(typeof isLoggedIn);

// https://262.ecma-international.org/5.1/#sec-11.4.3
