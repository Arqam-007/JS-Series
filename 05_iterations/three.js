// for of loop

let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

//map method
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.

const map = new Map();
map.set('name', 'Arqam');
map.set('age', 25);
map.set('city', 'JpJ');

// console.log(map);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
