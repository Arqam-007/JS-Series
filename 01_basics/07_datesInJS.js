//Dates

// let myDAte = new Date();
// console.log(myDAte.toDateString());

let myCreatedDate = new Date('2023-10-01');
// // console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();

newDate.toLocaleString(`default`, {
  weekday: 'long',
});
