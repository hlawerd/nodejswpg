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

mutants.forEach(function(mutants, index) {
   
    let mutant = mutants.toString();
    if ((mutant === 'Iceman') || (mutant === 'Logan') || (mutant === 'Phoenix'))
    {
        console.log(mutant);
    }
});