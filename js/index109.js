function validateUser(username, password){
    try 
    {
      switch (username , password) 
      {
        case (username === "nacho"):
        case (password === `Nerd1979`):
        case (username === "pedro"):
        case (password === `Batman0217`):
        case (username === `marta`):
        case (password === `Mother2312`):
            return `Wellcome "${username}", nice to see you again`;
            break;
        default:
             return 'Please input valid credentials!!!';
      }
    }
    catch(err)
    {
      return `erro ${err}`;
    }
}



/* const username  = `nacho`;
const password  = `Nerd1979`; 
const username  =  `pedro2`;
const password  =  `Batman0217`;
/*const username  = `marta`;
const password  = `Mother2312  `; */

const msg = validateUser('PEDRO3','Batman0217');

console.log(msg);