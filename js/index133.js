let mutants = 
[
'Professor X',
'Cyclops',
'Iceman',
'Angel',
'Magneto',
'Beast',
'Phoenix',
'Logan',
'Gambit'
];

let count = 0

for ( count = 0; ((count <= mutants.length - 1)  && (mutants[count] !== 'Magneto')); count++ ) {
    
    console.log(mutants[count]);
} 

mutants.splice(mutants.indexOf('Magneto'), 1); // Magneto has been removed


console.log(`================\n New Array ${mutants} \n================`);

mutants.forEach(function(mutantsNewArray) {
    console.log(mutantsNewArray.toUpperCase());
});
