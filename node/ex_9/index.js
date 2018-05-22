//express web server
const express = require('express');
const app = express();

//  
const http = require('http')  
const port = 3000

const requestHandler = (req, res) => {  
  console.log(req.url)
  res.end('Congrats you\'re using your first Node.js Web Server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log(`Unable to start the server on port ${port}`, err)
  }

  console.log(`This HTTP server is running on port ${port}`)
})