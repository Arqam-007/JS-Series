//block scope inside of function
//global scope outside of function

let a = 10; //global scope

if (true) {
  const a = 20; //block scope
  console.log('inner value of a:', a);
}

console.log(a);

function one() {
  const userName = 'Arqam';

  function two() {
    const website = 'youtube';
    console.log(userName);
    console.log(website);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const userName = 'Arqam';
  if (userName === 'Arqam') {
    const website = ' youtube';
    console.log(userName + website);
  }
  // console.log(website);
  // console.log(userName);
}

//************interesting */

//function declaration technique:1
function Addone(num) {
  return num + 1;
}
console.log(Addone(10));

//function declaration technique:2
const AddTwo = function (num) {
  return num + 2;
};
console.log(AddTwo(10));
