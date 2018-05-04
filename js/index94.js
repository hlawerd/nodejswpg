
let estrela = '*';
let msg = '';

for (let X = 1; ((X <= 7) || (X % 2 === 1)); X++) {
      msg = estrela;
      console.log(msg);
      estrela = estrela + '**';
}