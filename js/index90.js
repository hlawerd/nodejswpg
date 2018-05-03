
let msg = ''; 
let Soma = 0;

for (let X = 1; X <= 1000; X++ ) {
  if (X % 2 === 1 ){
    msg = `Impar`; 
    Soma = (Soma+X); 
    console.log(`when number is  ${X}`, `Result will be ${msg}`, `and sum ${Soma}`);
  }
  X++;
} 
