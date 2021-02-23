let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let language1 =language.slice(0, 1)+ language.slice(4,5);
console.log(language1);

//b) Without using .slice(), use method chaining to accomplish the same thing.

let language2=language.charAt(0)+language.charAt(4);
console.log(language2);
//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

let language3=language[0]+language[4];
console.log(`The abbreviation for, ${language} is ${language3}`);


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
let language4=language.slice(0,1)+language.charAt(4);
console.log(language4);