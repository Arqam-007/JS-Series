//'this' is used to refer the current "context(means about which we are talking about)'

const user = {
  username: 'Arqam',
  price: 1000,

  welcomeMessage: function () {
    console.log(`Welcoem ${this.username} to our JS session`);
  },
};
user.welcomeMessage();
user.username = 'Sam';
user.welcomeMessage();
// console.log(this);

//Arrow function

const Addthree = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
console.log(Addthree(10, 20, 30));

//Arrow function with implicit return
const Addfour = (num1, num2, num3) => num1 + num2 + num3;
console.log(Addfour(10, 20, 30));

//Arrow function with single parameter
const square = (num) => num * num;
console.log(square(5));

//Arrow function with no parameter
const greet = () => 'Hello, to JS series!';
console.log(greet());
