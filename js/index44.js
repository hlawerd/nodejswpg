let text    =   'HELLO';
let firstChar   = text.slice(4,5) ;
let secondChar  = text.slice(3,4);
let thirdChar   = text.slice(2,3);
let fourthChar  = text.slice(1,2);
let fivethChar  = text.slice(0,1);
let result      = firstChar.concat(secondChar,thirdChar,fourthChar,fivethChar);



console.log(`The final result is: ${result.toLowerCase()}`);
