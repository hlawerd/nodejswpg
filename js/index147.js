
let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS'
};


if (shouldOpenBatCave(user.username)){
    console.log('Welcome back batman!!');
}else{
    console.log('Sorry, you can\'t enter the Batcave, try again..');
}

function shouldOpenBatCave(username){
    if((username == 'batman') ){
        return true;
    }else{
        return false;
    }
}