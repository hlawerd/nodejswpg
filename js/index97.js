let msg = "";

for (let number = 1000; number >= 0; number--) 
    {
        if ( (number % 10 == 0) || (number == 0 || number == 10000) ) 
            {
                
                msg = `** ${number} **`; 
            }
            else 
                {
                    msg = number;
                }
        
        console.log(msg);
    };