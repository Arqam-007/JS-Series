// for each loop

const num = [1, 2, 3, 4, 5];
// we don't give name in callback function
//callback function is executed for each element in the array
// num.forEach(function (item) {
//   console.log(`Current iteam is ${iteam}`);
// });

// // we can also use arrow function
// num.forEach((item) => {
//   console.log(`Current iteam is ${item}`);
// });

// //we can also used function declaration
// function printItem(item) {
//   console.log(`Current iteam is ${item}`);
// }
// num.forEach(printItem);

//we also have other parameters in forEach
// num.forEach((item, index, array) => {
//   console.log(`Current iteam is ${item}, index is ${index}, array is ${array}`);
// });

const details = [
  {
    name: 'Arqam',
    age: '23',
  },
  {
    name: 'Ali',
    age: '27',
  },
  {
    name: 'Hamza',
    age: '26',
  },
];

details.forEach((value) => {
  console.log(value.name);
});

//for each loop don't return any value
