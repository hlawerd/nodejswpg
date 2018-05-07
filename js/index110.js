function average(number1, number2, number3, number4, number5,){
    try 
    {
      return (number1 + number2 + number3 + number4 + number5)/average.length;
      
    }
    catch(err)
    {
      return `erro ${err}`;
    }
}

const msg = average(2, 4, 10, 20, 30);

console.log(`The average is "${msg}"`);