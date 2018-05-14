
let user   = {
    username:  null,
    password: null,
    greet: function() { 

        if (user.username ) {
            return `Hello, I'm user ${user.username}`;
        } else {
            return `Please assign a username value`;
        }
       
    },
    updatePassword: function (stringOnly) { 
        this.password = stringOnly;         
    } ,
    updaterUsername: function (stringOnly) { 
        this.username = stringOnly;
        return this.username;
    }
};


console.log(` ${user.greet()}\n`);
user.updatePassword('123456');
console.log(user.password);
//user.updaterUsername('Hugo');
//console.log(user.username);

console.log(user.updaterUsername('Hugo'));