//falsy Values:
// falsy values are values that evaluate to false in a boolean context
//false,0,-0,bigInt 0n,"",null,undefined,NaN

//Truthy values:
// truthy values are values that evaluate to true in a boolean context
//true,{},[],1,-1,2n,"0","false"," ",function(){},Symbol()

const emptyString = ' ';
if (emptyString.length === 1) {
  console.log('This is a truthy value');
}

//nulish coalescing operator
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

let val1;
// val1 = null ?? 29;
// val1 = undefined ?? 29;
val1 = null ?? 20 ?? 30;
console.log(val1);
