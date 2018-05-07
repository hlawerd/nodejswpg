function biggerNumber(firstNumber, secondNumber) {
  const number = firstNumber;
  try {
         if (firstNumber > secondNumber) {
          return `Number ${firstNumber} is bigger than ${secondNumber}`;
        } else if (secondNumber > firstNumber){
          return `Number ${secondNumber} is bigger than ${firstNumber}`;
        } else if (firstNumber === secondNumber) {
          const number = firstNumber ;
          return `Both numbers are  ${number}`;
        } 
      }
      catch(err)
      {
       return `it is not number ${err}` ;
      }  
}
const firstNumber = 6;
const secondNumber = 6;

const message = biggerNumber(firstNumber ,secondNumber);

if (biggerNumber(firstNumber, secondNumber)){
  console.log(message);
} else {
  console.log(`error - needs a number!`);
}