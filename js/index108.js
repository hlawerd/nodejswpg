function threeNumber(firstNumber, secondNumber, thirdNumber) {
    try  {
          if ((firstNumber < secondNumber) && (secondNumber < thirdNumber )) {
            return `${firstNumber} | ${secondNumber} |  ${thirdNumber}`;
          } else if ((firstNumber < secondNumber) && (thirdNumber < secondNumber)){
            return `${firstNumber} | ${thirdNumber} |  ${secondNumber}`;
          } else if ((secondNumber < firstNumber) && (firstNumber < thirdNumber)){
            return `${secondNumber} | ${firstNumber} | ${thirdNumber}`;
          } else if ((secondNumber < firstNumber) && (thirdNumber < firstNumber)) {
            return `${secondNumber} | ${thirdNumber} | ${firstNumber}`;
          } else if ((thirdNumber < firstNumber) && (secondNumber < firstNumber)) {
            return `${thirdNumber} | ${secondNumber} | ${firstNumber}`;
          } else {
            return `${thirdNumber} | ${firstNumber} | ${secondNumber}`;
          }
        }
        catch(err)
        {
          return `it is not number ${err}` ;
        }
 
}

function fourthNumber(firstNumber, secondNumber, thirdNumber,highToLow){

  if ((firstNumber > secondNumber) && (secondNumber > thirdNumber ) && (highToLow ===true) ) 
                  {
                    return `${firstNumber} | ${secondNumber} |  ${thirdNumber}`;
                  } 
                  else if ((secondNumber > firstNumber) && (firstNumber > thirdNumber))
                  {
                    return `${secondNumber} | ${firstNumber} | ${thirdNumber}`;
                  } 
                  else if ((thirdNumber > firstNumber) && (secondNumber >firstNumber))
                  {
                    return `${thirdNumber} | ${secondNumber} | ${firstNumber}`;
                  } 
                  else 
                  {
                        return `${thirdNumber} | ${firstNumber} | ${secondNumber}`;
                  }
}


function getNumber(firstNumber, secondNumber, thirdNumber,highToLow) {
  try   {
          if (highToLow)
            {
              return fourthNumber(firstNumber, secondNumber, thirdNumber,highToLow);
            }
            else
            {
              return threeNumber(firstNumber,secondNumber,thirdNumber);
            }
        }
        catch(err){
          return `erro ${err}`;
        }
      
}

const firstNumber   = 5;
const secondNumber  = 12;
const thirdNumber   = 60;
let highToLow       = true;

const message = getNumber(firstNumber,secondNumber,thirdNumber,highToLow);

console.log(message);