
let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS'
};


if (shouldOpenBatCave(user.username,user.password)){
    console.log('Welcome back batman!!');
}else{
    console.log('Sorry, you can\'t enter the Batcave, try again..');
}

function shouldOpenBatCave(username,password){
    if((username == 'batman') && (password === 'Alfred1960KPO! ')){
        return true;
    }else{
        return false;
    }
}