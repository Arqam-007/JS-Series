// ************for loop**********

for (let index = 0; index <= 10; index++) {
  const element = index;
  // console.log(element);
}

// for (let i = 0; i < 10; i++) {
// //   console.log(`out loop ${i}`);
// //   for (let j = 0; j < 10; j++) {
// //     console.log(`inner loop ${j}`);
// //   }
// // }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Multiplication Table of ${i}:`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// *******break and continue*********

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log('Breaking the loop at i = 5');
//     break;
//   }
//   console.log(`Current value of i: ${i}`);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log('Breaking the loop at i: 5');
//     continue;
//   }
//   console.log(`Current value of i: ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`Even number: ${i}`);
    continue;
  }
  console.log(`Odd number: ${i}`);
}
