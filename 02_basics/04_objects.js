// singleton

// const tinderUser = new Object(); //sinleton object

//non singleton object
const tinderUser = {};

tinderUser.name = 'Arqam';
tinderUser.age = 23;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const createUser = {
  email: 'arqam@gmail.com',
  Name: {
    firstName: 'Arqam Aziz',
    LastName: 'Butt',
  },
};
// console.log(createUser.Name.firstName);

const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'e', 5: 'f', 6: 'g' };

const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

const data = [
  {
    id: 1,
    name: 'Arqam',
  },
  {
    id: 1,
    name: 'Arqam',
  },
  {
    id: 1,
    name: 'Arqam',
  },
  {
    id: 1,
    name: 'Arqam',
  },
];

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('name'));

const course = {
  coureName: 'JavaScript',
  courseFee: '$100',
  courseInstructor: 'Arqam Aziz',
};

const { coureName } = course;
console.log(coureName);
