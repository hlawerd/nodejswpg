let text    =   'game of thrones';
let firstChar   = text.charAt(0) ;
let secondChar  = text.charAt(5);
let thirdChar   = text.charAt(8);
let name        = firstChar.concat(secondChar,thirdChar);

console.log(`The final result is: ${name.toUpperCase()}`);