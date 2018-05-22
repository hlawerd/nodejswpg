const http = require('http');

const express = require('express');
const router = express.Router();
const port = 3000;
const app = express();



const server = http.createServer(requestHandler);
server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

module.exports = router;