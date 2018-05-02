let X = 1;
let msg = ''; 
let Soma = 0;

while (X <= 1000) {

    if (X % 2 === 1 ){
      msg = `Impar`; 
      Soma = (Soma+X);
      console.log(`when number is  ${X}`, `Result will be ${msg}`, `and sum ${Soma}`);
      /* Soma++; */
    }
    X++;
}
