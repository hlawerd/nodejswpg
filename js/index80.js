let X = 1;
let msg = ''; 
let Soma = 0;

do {
  if (X % 2 === 1 ){
    msg = `Impar`; 
    Soma = (Soma+X);
    console.log(`when number is  ${X}`, `Result will be ${msg}`, `and sum ${Soma}`);
  }
  X++;


} while (X <= 1000)
