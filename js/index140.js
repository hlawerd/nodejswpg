const mutants = 
[
    `Professor X`,
    `Cyclops`,
    `Iceman`,
    `Angel`,
    `Magneto`,
    `Beast`,
    `Phoenix`,
    `Logan`,
    `Gambit`,
];
// create the constant name and add the array MUTANTS using the filter to return just you want to
const excludeMutants = mutants.filter(function(mutants) {// filter's function
    if ((mutants !=='Magneto') && (mutants !== 'Iceman') && (mutants !== 'Gambit')) {
        return true;
    } else { return false;}
});

console.log(`[News Mutants:]\n ${excludeMutants} \n[Fulled List before:]\n ${mutants}`);