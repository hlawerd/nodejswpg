let stars = 13;
let msg = '*************';

while (stars >= 1) {
  msg = msg.substr(1,stars.length);
  console.log(msg);
  stars--;
} 