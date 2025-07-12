// singleton
//object.create

// object literals

const sym = Symbol('key1');

const jsUser = {
  name: 'Arqam',
  age: 23,
  [sym]: 'key1',
  location: 'Pakistan',
  email: 'arqam@google.com',
  isLoggedIn: false,
};

console.log(jsUser.age);
console.log(jsUser['email']);
console.log(jsUser[sym]);

jsUser.email = 'gpt@gmail.com';
// Object.freeze(jsUser);
// jsUser.email = '123@gpt.com';
console.log(jsUser);

jsUser.greeting = function () {
  console.log('Hello WORLD');
};

jsUser.greetingTwo = function () {
  console.log(`Hello ${this.name}`);
};
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// in most cases we use '.' to access the properties of an object
// but in some special cases we  use '[]' to access the properties of an object
