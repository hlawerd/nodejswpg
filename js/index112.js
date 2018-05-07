function showNumber(start, end) 
{
  try 
  {
    if (start < end) 
    {
        for (start; start <= end; start++) {
            console.log(start);
        }
    } 
    else if (start > end) 
           {
              for (start; end <= start; start--) {
              console.log(start);   
              }
           }
    else if (start === end) {
      console.log(`The Numbers are the same!`);
    } else { 
      console.log(`Bla! Bla! Bla! you got a mistake!`);
    }
  }
  catch(err)
  {
    return `erro ${err}`;
  }
      
}

/* showNumber(0, 10); */
/*  showNumber(10, 0); */
showNumber(100, 100); 
/* showNumber('hu', 300); */  