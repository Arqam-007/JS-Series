//for in loop

const myObj = {
  name: 'Arqam',
  age: 25,
  city: 'JpJ',
};

for (const key in myObj) {
  console.log(`${key} is ${myObj[key]}`);
}

const details = ['Arqam', '25', 'JpJ'];

for (const key in details) {
  console.log(details[key]);
}

//map can not be used for iteration
