/* ================================================================ */
// ================================================================
// get all the tools we need
// ================================================================
/* ======== I want to set up all the variables here only  ========= */

const express = require('express');
const port = process.env.PORT ||3000;
const app = express();
const router = express.Router();
//const path = require('path');


    // == SET UP the engine PUG ==
    app.set('view engine', 'pug');


    // ===== SET UP the folders =====
    app.use(express.static('public'));
    app.use(express.static('views'));


    // =============== GET a Home Page ===============
    app.get('/', (req, res, next) => res.status(200).render('pages/index.pug'));


    // =============== GET a teste Page ===============
    app.get('/teste', (req, res, next) => res.status(200).render('pages/teste.pug', {title: ' Teste with pug extends'}));

    // =============== GET a 404 Page ===============
    app.get('/404', (req, res) => res.status(200).render('pages/404.pug'))

    
    // =============== Listening on the port if OK show this msg ===============
    app.listen(3000, () => console.log(`listening on port ${port}!`));

    // =============== GET a Page off line by server side ===============
    app.get('/products', (req, res) => res.status(500).send('Server error, please try it later'));


module.exports = router;
