function greetings(userName) {
  if (!userName) {
    console.log('Please enter your name.');
    return;
  }
  return `Welcome to the course ${userName}`;
}

// console.log(greetings('JavaScript Learner'));

const user = {
  name: 'Arqam',
  price: 1000,
};

function sumcharts(anyobject) {
  console.log(
    `Thw name of the user is ${user.name} and the price is ${user.price}`
  );
}
// sumcharts();

const user2 = [100, 200, 300, 400, 500];

function sumOfArray(getarray) {
  return getarray[4];
}
// console.log(sumOfArray(user2));

function SignIn(userName, Email) {
  if (!userName || !Email) {
    console.log('Please enter your name and email.');
    return;
  }
  return `Welcome ${userName}, your email is ${Email}`;
}

console.log(SignIn('Arqam', 'arqam@gmail.com'));
