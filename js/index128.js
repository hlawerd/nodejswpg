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


const   Blueberry   = iceCreamFlavors.pop(),
        Raspberry   = iceCreamFlavors.pop(),
        Strawberry  = iceCreamFlavors.pop(),
        Kiwi        = iceCreamFlavors.pop();

console.log('New Flavors now: '+iceCreamFlavors+'\n' +Blueberry+ '\n' + Raspberry+ '\n' + Strawberry+ '\n' + Kiwi);