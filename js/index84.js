let X = 1;
let estrela = '*';
let msg = '';

do {
      msg = estrela;
      console.log(msg);
      estrela = estrela + '**';
     /*  number++; */ X++;
} while ((X <= 7) || (X % 2 === 1) )