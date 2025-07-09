const accountId = 1234;
let accountEmail = '1234gmail.com';
var accountPassword = '12345';
accountCity = 'Gujrat';

// accountId = 2; change not allowed

accountEmail = 'hhh@gmail.com';
accountPassword = '22222';
accountCity = 'jpj';

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
