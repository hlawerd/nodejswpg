const express = require('express');
const port = 3000;
const app = express();
const http = require('http');


// Routers below
const home = require('./home.js');
const user = require('./user');

app.use('/',home); // this condition explaind when the router is "/" means PAGE
app.use('/user', user);



// ########################333333 needs to confirm  if using HTTP or EXPRESS or both 