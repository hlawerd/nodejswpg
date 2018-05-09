function getShapePerimiter(base, height) 
{
  
  try 
  {
   if (base === height) {
      P = (base * height);
   } else {
         P = 2 * (base + height); 
   }
    return P /* is a shape perimeter` */;
  }
  catch(err)
  {
    return `erro ${err}`;
  }
      
}

let base = 1530;
let height = 1530;
let ResultPerimeter = getShapePerimiter(base, height);

function reponse(ResultPerimeter){
  if (ResultPerimeter > 100) {
    return `The perimiter is big`;
  } else {
    return `The perimiter is fine.`;
  }
  
}
console.log(ResultPerimeter);
console.log(reponse(ResultPerimeter));

