'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

/* ####################### conection test ####################### */
app.listen(port, () => console.log(`Conexting on the port: ${port} ....`));

module.exports = app,express,path;