
    } else if (make != "") {
      collection.find({make: make}).toArray((findError, products) =>{

        const content = {
          title: 'Products',
          mainTitle: 'Products',
          productCollection: products,
          imagesFolder: 'img/',
          make: make,
          year: year,
          model: model,     
          status: status,
          bodystyle: bodystyle,
          price: Price
        };
        response.render('pages/products', content);
      });
    } else if (year != "") { 
      collection.find({year: +year}).toArray((findError, products) => {

        const content = {
          title: 'Products',
          mainTitle: 'Products',
          productCollection: products,
          imagesFolder: 'img/',
          make: make,
          year: year,
          model: model,     
          status: status,
          bodystyle: bodystyle,
          price: Price
        };
        response.render('pages/products', content);
      });
    }
