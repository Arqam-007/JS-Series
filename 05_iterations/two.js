//while loop

let a = 0;
while (a < 10) {
  console.log(`Current value of a: ${a}`);
  a = a + 2;
}

let grades = ['a', 'b', 'c', 'd', 'e'];
let index = 0;
while (index < grades.length) {
  console.log(`Current grade: ${grades[index]}`);
  index++;
}

// do while loop
// The do-while loop executes the block of code once before checking the condition, ensuring that the code runs at least once.

let score = 11;
do {
  console.log(`Current score is ${score}`);
  score = score + 2;
} while (score <= 10);
