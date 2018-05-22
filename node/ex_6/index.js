const logger = require('logplease');
const log = logger.create('log');
const msn = "Hello mundo!";

const firstname = 'Hugo';
const lastName  = 'Lima';

 const greet = function(firstName,lastName)
 {
    log.info(`Hi "${firstName} ${lastName}"`);   
 };

 greet(firstname, lastName );



/* ########################## NEEDS to ADDRESS ############################### */

 
let First = 'LEONARDO';
let Last  = 'GOMES';
const myFunction = () => { log.info('This code gets executed after the greet function call');}

function greet1(First,Last, callback) {
  console.log(First,Last); 
  next();
} 

log.debug(`Second request ${First} ${Last} ${myFunction}`); 
