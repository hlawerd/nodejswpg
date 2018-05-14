
let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS'
};

let firstLetter =   user.username.charAt(0).toUpperCase();
let newUser  =   firstLetter + user.username.slice(1,6);

//remove 1960 from the text

const newPassword   =   user.password.slice(0,6)+' '+user.password.slice(10,15);

console.log(`Username: ${user.username} \nPassword:  ${user.password}\n\nNew User and Password: ${newUser} -- ${newPassword}`);