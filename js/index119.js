const data = [42, true, function() {return 'The meaning of life is: '}];

const text = data[2];

if (data[1]){
    console.log(text()+ ' ' +data[0]);
}