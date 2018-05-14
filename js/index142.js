const firstPerson = ['Hugo', 'Lima', '3 Donal Street ', 40];
const secondPerson = ['Hugo', 'Lima', '3 Donal Street ', 40];
//['Manuela ', 'Galindo ', '3 Donal Street ', 35];

retorno();

function retorno() {

    const resultFirstPerson = firstPerson.reduce(function(accumulator1, currentValue1) {
        return accumulator1 + currentValue1;
      });
      
      const resultSecondPerson = secondPerson.reduce(function(accumulator2, currentValue2) {
          return accumulator2 + currentValue2;
      });
       
       if(resultFirstPerson === resultSecondPerson){
          console.log('They are the same person.')
      }else{
          console.log('They are not the same person.')
      } 
      
}
