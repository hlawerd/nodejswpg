const express = require('express'); // create a Express web server here
const app = express(); // set up the variable app
const port = 3000; // using the port 3000 and set up in the variable here
const path = require('path');

app.get('/', (req, res) => {res.sendfile(path.join(__dirname,'index.html'))})
app.get('/products', (req,res) => {res.sendfile(path.join(__dirname,'products.html'))})

app.listen(port, ()=> console.log(`Server Listening on port ${port}`))
