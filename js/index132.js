let mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix',
    'Logan'
];

let mutant, noMutant = "";

        if ( (mutants.indexOf('Professor X') > -1 && mutants.indexOf('Logan') > -1) ) {
           mutant = `We love X-Men`;
        } 
        
        if (mutants.indexOf('Gambit') <= -1) {
            noMutant = `X-Men sucks as Gambit: `;
        }

        console.log(`${mutant} and ${noMutant}`);