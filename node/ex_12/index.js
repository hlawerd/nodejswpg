const express = require('express'); // create a Express web server here
const app = express(); // set up the variable app
const port = 3000; // using the port 3000 and set up in the variable here
const path = require('path');

let getProducts = 
{
    description: 'Products',
    items: 
    [
            { name: 'Star Wars jacket' , price: 100},
            { name: 'FIFA 22 PS4' , price: 79},
            { name: 'Superheore t-shirt' , price: 10},
            { name: 'Jets game shirt' , price: 200},
            { name: 'Large Meat lovers pizza' , price: 12},
            { name: 'Canada Dry  bottle' , price: 2}
    ]
}


app.listen(port, ()=> console.log(`Server Listening on port ${port}`))
app.get('/api/products', (req, res) => { res.send(`
    Description: ${getProducts.description}\n
    Items : ${getProducts.items} \n`)})



//router.listen(port, () => console.log(`Server Listening on port ${port}`))



