'use strict';
const conextion = require('./conection');

module.exports = (app) => {
    app.get('/', (req,res) => res.status(200).sendFile(path.join(__dirname,'index.html')))
    app.use(express.static('public'));
    app.use(express.static('./imgs'));
};