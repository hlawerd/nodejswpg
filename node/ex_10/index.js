const express = require('express'); //require the express module
const app = express(); // created a express server

const port = 3000;
const Logger = require('logplease'); // to log information
const log = Logger.create('utils');

var oneLinerJoke = require('one-liner-joke'); // to Joke
    
 let joke = oneLinerJoke.getRandomJoke();
 let joke2 = oneLinerJoke.getRandomJoke();

  app.get('/', (req, res) => { res.send('Hello World!'); }); 
  app.get('/jokes', (req, res) => { res.send('FIRST JOKE HERE => '+joke.body+ '\n\nSECOND JOKE HERE => '+joke2.body)});
  app.get('/joke', (req,res) => {res.send('One joke here => ' +joke.body)} )
  app.post('/joke', (req,res) => {res.send(`my jokes are too funny, I\'m not getting new ones from you..`)} )
  app.put('/joke', (req,res) => {res.send('no, no, no.. not changing my act dude!')} )
  app.delete('/joke', (req,res) => {res.send('good jokes never get to old')})
  app.all('/joke', (req,res) => {res.send(`I know I'm so good that you're looking for jokes everywhere`)})

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});