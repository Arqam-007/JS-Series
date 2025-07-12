const marvel_heroes = ['thor', 'Ironman', 'spiderman'];
const dc = ['batman', 'superman', 'flash'];

// marvel_heroes.push(dc);

// console.log(marvel_heroes);

// const all = marvel_heroes.concat(dc);
// console.log(all);

const all = [...marvel_heroes, ...dc]; // Using spread operator to merge arrays
console.log(all);

console.log(Array.isArray(all));
console.log(Array.from('Arqam'));
console.log(Array.from({ name: 'Arqam' })); //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Using Array.of to create an array from values
