const iceCreamFlavors = 
[
'Chocolate',
'Vanilla',
'Lemon',
'Watermelon',
'Coffee',
'Melon',
'Kiwi',
'Strawberry',
'Raspberry',
'Blueberry'
];

const Chocolate = iceCreamFlavors.shift(), Vanilla = iceCreamFlavors.shift();

console.log('New Flavors now: '+iceCreamFlavors+'\n' +Chocolate+ '\n' + Vanilla);
