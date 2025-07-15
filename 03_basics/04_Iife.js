// Imediately Invoked functio expression (IIFE) is a function that runs as soon as it is defined.
//to rmove the pollution of the global scope, we can use IIFE

(function one() {
  //named IIFE
  console.log('DB is connected');
})();

((name) => {
  console.log(`DB two is coonected ${name}`);
})('Arqam');
