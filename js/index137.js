const numbers = [];

let index = 0;

do {
    numbers.push(index);
    index++;
} while (index <= 1000)

let Result = numbers.map(function(number, index) {
    console.log(`Index - ${index} , Original Number - ${number} , Incremented Value - ${number + 10}`);
});

