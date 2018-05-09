const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let  grades0 = grades[0],
     grades2 = grades[2],
     grades4 = grades[4], 
     grades9 = grades[9];
     
const msg = result(grades0,grades2,grades4,grades9);

function result(grades0,grades2,grades4,grades9){
    return (grades0 + grades2 + grades4 + grades9);
}

console.log(msg);

/* 
const grades  = [1,2,3,4,5,6,7,8,9,10];

let first = grades[0];
let third = grades[2];
let fifth = grades[4];
let Last  = grades[9];

let result = grades.join('?');

console.log(`${students[0]}, ${students[2]}, ${students[4]} `);

const joinedNumbersByComma = numbers.join(', ');

console.log(joinedNumbersByComma); */