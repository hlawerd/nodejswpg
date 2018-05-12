const mutants = [
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

let mutantLoved = mutants.map(function(mutant) {
    if (mutant === 'Professor X' || mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit') {
        mutant = ' <3 ' + mutant; 
    } 
    return mutant; 
})

console.log(`Original \n${mutants}\n\nIn love :\n${mutantLoved}`);
//console.log(`In love : \n${mutantLoved}`);