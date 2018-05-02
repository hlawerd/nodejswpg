let stars = 13;
let msg = '*************';

do {
  msg = msg.substr(1,stars.length);
  console.log(msg);
  stars--;
} while (stars >= 1)