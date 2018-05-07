function evenNumbers() {
  let N  = 80, 
    F  = 0, 
    F1 = -1,count=0, 
    F2 = 1;
  
    for (F =0; (F <= N && count <=9); count++ ) {
        
          F  = (F1 + F2);
          F1 = F2;
          F2 = F;
          console.log(F); 
          
    } 
  
}

for (let i=0; i<=3; i++){
  console.log(evenNumbers()); 
}