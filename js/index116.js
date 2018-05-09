/* 
white
black
blue
green
yellow
pink
*/


let color = 'pink';

const msg = getHexaColor(color);

function getHexaColor(parameter) 
{
  
  try 
  {
    switch (parameter) 
      {
        case "white": return `#FFFFFF`; break;
        case "black": return `#000000`; break;
        case "blue": return `#0b24fb`; break;
        case "green": return `#0e7e12`; break;
        case "yellow": return `#fffd38`; break;
        case "pink": return `#fec1cc`; break;
        default:
             return 'Please input valid credentials!!!';
      }
    
  }
  catch(err)
  {
    return `erro ${err}`;
  }
      
}

console.log(`The hexa color is - ${msg}`);
