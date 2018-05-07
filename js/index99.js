let msg = "";

for (let number  = 0; number <= 1000; number++ ) {
    if (number === 20) {
        msg = `this result got it over ${number}`;
        break;
    } else {
        msg = `The result got ${number} :) `;
    }
    console.log(number);
}
console.log(msg);