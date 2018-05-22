const logger = require('logplease');
const log = logger.create('log');

const getGreeter = require('./greeter') //Require the greeter module here
const GetInformation = getGreeter('Leo','Gomes')

log.info(GetInformation); // send the variable 