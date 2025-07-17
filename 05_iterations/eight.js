const num = [1, 2, 3, 4, 5];

// const total = num.reduce(function (acc, currnVal) {
//   console.log(`acc: ${acc}  currnVal: ${currnVal}`);
//   return acc + currnVal;
// }, 0);
// console.log(total);

// const total = num.reduce((acc, currVal) => {
//   console.log(`acc: ${acc} currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);
// console.log(total);

const ShoppingCart = [
  {
    Name: 'JS',
    price: 2000,
  },
  {
    Name: 'React',
    price: 2090,
  },
  {
    Name: 'Python',
    price: 2890,
  },
  {
    Name: 'Vite',
    price: 20200,
  },
];

const total = ShoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
