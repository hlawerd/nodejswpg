const tripExpenses = 
[
    500,
    1500,
    250,
];

const   hotelFees       = tripExpenses[0],
        tripFees        = tripExpenses[1],
        mealsFees       = tripExpenses[2];

const budget  = tripExpenses.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue;
});

console.log(`hotel: ${hotelFees}, trip: ${tripFees}, meals: ${mealsFees}\n\nTotal trip budget: ` +budget);
