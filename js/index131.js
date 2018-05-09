const femaleStudents  = 
[
    'Maria',
    'Marta',
    'Manuela',
    'Marli',
    'Maristela'
];

const maleStudents   = 
[
    'Hugo',
    'Heric',
    'Marcio',
    'Gabriel',
    'Joao Victor'
];

const students = 
[
    femaleStudents[0],femaleStudents[1],femaleStudents[2],femaleStudents[3],femaleStudents[4],
    maleStudents[0],maleStudents[1],maleStudents[2],maleStudents[3],maleStudents[4]
];

console.log('Students are: '+students.sort());

console.log('\n################\nwith "WHILE" \n');
let count1 = 0; 
while (count1 <= maleStudents.length -1) {
    console.log(maleStudents[count1]);
    count1++;
}
console.log('\n################\nwith "FOR" \n');
for (let count = 0; count <= students.length -1; count++) {
    console.log(students[count]);
} 

console.log('\n################\nwith "Numeric Index" \n\n'
            +femaleStudents[0]+
            '\n'+femaleStudents[1]+
            '\n'+femaleStudents[2]+
            '\n'+femaleStudents[3]+
            '\n'+femaleStudents[4]);