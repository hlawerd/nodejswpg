const logger = require('logplease');
const logger1 = logger.create('log');

logger1.debug(`Hello Node.js`);
logger1.info(`This is a debug message`);
logger1.warn(`Warning, Warning, I think we have a Warning`);
logger1.error(`Mayday Mayday, we have an errro, repeat.. we have an error`);
