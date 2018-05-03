
let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS'
};

console.log(user.username.charAt(0).toUpperCase().concat(user.username));
console.log(`Username: ${user.username} \nPassword:  ${user.password}`);

/* console.log(`Name: ${user.name} -- ` +typeof user.name);
console.log(`Age: ${user.age} -- ` +typeof user.age); */

/* Now show the users username and password as output again but with the following format:
username: must be capitalize: example: Batman
password: replace 1960 for an empty space so it looks this way: Alfred ROCKS!
In both cases use the user object properties to get the final output */