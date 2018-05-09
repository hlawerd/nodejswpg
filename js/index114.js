function showNrevert(string) 
{
  let characterCount  = information.length, invert = "";
  try 
  {
    for (characterCount; characterCount >= 1; characterCount--)
    {
      invert = invert + string.charAt(characterCount -1)
    }
    console.log(invert);
    
  }
  catch(err)
  {
    return `erro ${err}`;
  }
      
}

let information = 'Paralelepipedo';
information.length; 
showNrevert(information); 