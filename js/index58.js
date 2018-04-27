const hour  = 3 ;

if (hour > 5 && hour < 12) {
    console.log("Good Morning");
} else if (hour >= 12 && hour < 18){
    console.log("Good Afternoon");
} else if (hour >= 18 && hour < 22){
    console.log("Good Evening");
} else {
    console.log("Good Night");
}
