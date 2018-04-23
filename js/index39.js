let firstName   = 'HUGO';
let lastName    = 'DE LIMA';
let result = !(firstName.length - lastName.length); 


/*  console.log('My name is: ' +(firstName)+ ' and it has ' +(result)+ ' characters long'); */
console.log(`My First Name is ${firstName} and it has ${firstName.length} characters long\n
My last Name is ${lastName} and it has ${lastName.length} characters long\n
The character difference between my first name and last name is ${firstName.length - lastName.length}\n
My First Name is longer than my Last Name: ${result}`);