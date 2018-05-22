const http = require('http');

const express = require('express');
const router = express.Router();
const port = 3000;
const app = express();

//router.get('/', (req, res) => { res.send('This is my Home page using Express Router')})
//app.listen(port, ()=> console.log(`Server Listening on port ${port}`))

 const requestHandler = (request, response) => {  
    response.end('This is my Home page using Express Router');
  } 
  const server = http.createServer(requestHandler);

  server.listen(port, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
  })

  module.exports = router;