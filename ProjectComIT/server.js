/* ================================================================ */
// get all the tools we need
/* ======== I want to set up all the variables here only  ========= */

const express = require('express');
const port = process.env.PORT ||3000;
const app = express();
const getFilter = require('./filter');

// MongoDB config
const MongoClient = require('mongodb').MongoClient;
const databaseName = 'car';
const collectionName = 'detail';
const mongodbURL = 'mongodb://localhost:27017';
// sconst ObjectID = require('mongodb').ObjectID;
// == SET UP the engine PUG ==
app.set('view engine', 'pug');


// ===== SET UP the folders =====
app.use(express.static('public'));
app.use(express.static('views'));
 
// =============== GET a Home Page ===============
app.get('/', (req, res) => res.status(200).render('pages/index', { title: 'Malima Car - Automotive Company' }));

// =============== GET a 404 Page ===============
app.get('/404', (req, res) => res.status(200).render('pages/error404'))
  
// this is express getting the request at /products
app.get('/products', (request, response) => {  
  const filter = getFilter(request.query);
  
  MongoClient.connect(mongodbURL, (error, client) => {
    const database = client.db(databaseName); 
    const collection = database.collection(collectionName);

    
    collection.find(filter).toArray((findError, products) =>{

      const content = {
        title: 'Products',
        mainTitle: 'Products',
        productCollection: products,
        imagesFolder: 'img/'
      };
      response.render('pages/products', content);
    });

  });
});
    
// =============== Listening on the port if OK show this msg ===============
app.listen(3000, () => console.log(`listening on port ${port}!`));

// =============== GET a Page off line by server side ===============
app.get('/products', (req, res) => res.status(500).send('Server error, please try it later'));

