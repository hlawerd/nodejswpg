const products = [
    {   stock: 'R17106', 
        year: 2017, 
        make: 'Ford', 
        model: 'Fusion SE', 
        price: 27.900, 
        bodystyle:'Sedan', 
        image: 'R17106_1.jpg' 
    },
    { stock: '17005', year: 2017, make: 'Dodge', model: 'Ram 1500 SLT', price: 59.135, bodystyle:'Truck Crew Cab', image: '17005_1.jpg' },
    { stock: 'R17159', year: 2017, make: 'Ford', model: 'Mustang GT Premium', price: 46.134, bodystyle:'Convertible', image: 'R17159_1.jpg'  },
    { stock: 'B2018i3', year: 2018, make: 'BMW', model: 'i-3',price: 52000, bodystyle: 'couple', image: 'BMW-i3-2018-1024-02.jpg'}
  ];

  let returnCarFiltered = products.filter(val => {

    if (val.stock == '17005')
    {
        console.log(`Stock Number: ${val.stock}\nYear: ${val.year}\nMake: ${val.make}\nModel: ${val.model}`);
    }
    
  });

  returnCarFiltered;
  

  let carFiltered = products.filter(retorno => retorno.stock == '17005');
  console.log(carFiltered);