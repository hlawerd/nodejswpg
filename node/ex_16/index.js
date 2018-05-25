const express = require('express');
const port = 3001;
const app = express();
const path = require('path');

app.get('/', (req,res) => res.status(200).sendFile(path.join(__dirname,'index.html')))

app.use(express.static('public'));
app.use(express.static('imgs'));

app.use('/assets', express.static('public'));

/* ####################### conection test ####################### */
app.listen(port, () => console.log(`Conexting on the port: ${port} ....`));


/* ####################### teste here older ################################# */

'use strict';
/* const express = require('express');
const app = express(); */
//const port = 3001;
//const path = require('path');
/* const router = require('./static'); */


//app.use(express.static('public'));
//app.use(express.static('imgs'));

//app.use('/assets', express.static('public'));

/* ####################### conection test ####################### */
//app.listen(port, () => console.log(`Conexting on the port: ${port} ....`));
