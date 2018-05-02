let N  = 80, 
    F  = 0, 
    F1 = -1, 
    F2 = 1;

do {
    F  = (F1 + F2);
    F1 = F2;
    F2 = F;
    console.log(F);
} while (F <= N)