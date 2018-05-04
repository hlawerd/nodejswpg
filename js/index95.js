let N  = 80, 
     
    F1 = -1, 
    F2 = 1;

for (let F  = 0; F <= N; F++ ) {
    F  = (F1 + F2);
    F1 = F2;
    F2 = F;
    console.log(F);
}