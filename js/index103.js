function evenNumbers() {
  let X = 0;
  let msg = ''; 
  
  while (X <= 20) {
    
      if (X % 2 === 0 ){
        msg = `is the even number`;
         console.log(`${X} ${msg}`);
        /*finilizar ainda */
      } 
      X++;
      if (X !== (X % 2 === 0 )) {
        console.log(X);
      }
     
   
  }
  
}

console.log(evenNumbers( )); /* 
for (let count =0; count <= 5; count++) //i=iteration = powtorzenie
{
  console.log(evenNumbers()); 
} */


/*  function will print even numbers between 0 and 100 as output 

  if (number % 2 == 0) {
            console.log(number);
        }



*/