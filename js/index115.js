let firstName = 'Hugo';
let secondName = 'Leo';
let thirdName = 'Jurema';
let fourthName = 'Apolonio';
let fifthName = 'Mingula';
let sixthName = 'Chato67';


const msg1 = getLongerText(firstName, secondName);
const msg2 = getLongerText(thirdName, fourthName);
const msg3 = getLongerText(fifthName, sixthName);

function getLongerText(Name1, Name2) 
{
  let test1 = Name1.length, test2 = Name2.length;
  try 
  {
    if (test1 > test2) {
      return Name1;
    } if (test1 < test2) {
      return Name2;
    } else {
      return `Ops! words are equal`;
    }
    
  }
  catch(err)
  {
    return `erro ${err}`;
  }
      
}

console.log(msg1);
console.log(msg2);
console.log(msg3);