
let msg = '*************';

for (let stars = 13; stars >= 1; stars-- ) {
  msg = msg.substr(1,stars.length);
  console.log(msg);
  
}