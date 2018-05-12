const numbers = [];

for (let i = 1000; i >= 1; i--) {
    numbers.push(i);
}

const Even = numbers.filter(function(number, index) {
    return ((number%2 === 0) && (index < 40));
})

const Odd = numbers.filter(function(number, index) {
    return (number%2 === 1) && (index < (numbers.length)) && (index >= (numbers.length - 20));
})

console.log(`Original NUmber:\n ${numbers} \n\nEven number: ${Even}\n\n Odd Number: ${Odd}`);