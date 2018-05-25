const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'index.html')))

app.get('/users', (req, res) => res.status(404).sendFile(path.join(__dirname,'404.html')))
  
  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });

app.get('/products', (req, res) => res.status(500).send('Server error, please try it later'));
