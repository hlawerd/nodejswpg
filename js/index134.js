const numbers = [];

function count1to1000( testeOne)
{
    for (let i = 0; i < 1000; i++) {
        console.log(`${numbers.push(i)}`);
        
     /* sum = numbers[i]+2;console.log(`teste - ${sum}`); */
    }
}

count1to1000();
console.log(`===========================`);

let result = 0;

    for(let i=0; i<numbers.length ;i++){
        numbers[i] = i + 1;
        result = numbers[i] + result; 
        console.log(result);
 
    }


if(result==50005000){
    console.log('Good job!!!');
}else{
    console.log('Take a look to see if something is wrong');
}