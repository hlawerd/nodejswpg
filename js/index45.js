let playerName     =   'Patrik Laine is lame';
let teams    = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins' ;
let message   = 'Winnipeg is the best Canadian citi, Go Winnipeg';
let part01   = playerName.slice(0,15).toUpperCase();
let part02  = teams.slice(45,51);
let part03  = message.slice(11,21);
let part04 = message.slice(34,39)

let result      = part01.concat(part03,part02,`player`,part04);

console.log(`${result}`);
