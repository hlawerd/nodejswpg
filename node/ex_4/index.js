var oneLinerJoke = require('one-liner-joke');
const logger = require('logplease');
const log  = logger.create('log');

let joke = oneLinerJoke.getRandomJoke();
  log.info('To Joke Body has => '+joke.body+ '\n');

joke.tags.forEach(tag => {
    log.warn(`To Joke Tag has => ${tag} \n`);
  });
  
const sarcasticJoke = oneLinerJoke.getRandomJoke('sarcastic');

sarcasticJoke.tags.forEach(tag => {
    log.error(`To each "TAG" has: ${tag}\n`);
  });
