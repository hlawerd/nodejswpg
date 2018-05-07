

function discovery(number){
    try 
    {
      if (number % 2 === 0){
        return `${number} is even`;
      } else {
        return `${number} is odd`;
      }
      
    }
    catch(err)
    {
      return `erro ${err}`;
    }
}
/*  2, 5, 3, 24, 12 */
const msg = discovery(5);

console.log(`"${msg}"`);