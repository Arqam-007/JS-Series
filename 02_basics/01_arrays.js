// array

const MyArr = [0, 1, 2, 3, 4, 5];
const MyHeroes = ['Batman', 'Superman', 'Spiderman', 'Ironman'];

const MyArr2 = [1, 2, 3, 4];
// console.log(MyArr[1]);

// Arry Methods

// MyArr.push(6);
// console.log(MyArr);

const myn1 = MyArr;
console.log('A', myn1);

const myn3 = MyArr.slice(0, 3); //slice don't manipulate the orignal array
console.log('B', myn3);
console.log(MyArr);

const myn2 = MyArr.splice(0, 3); ////splice do manipulate the orignal array
console.log('C', myn2);
console.log(MyArr);
