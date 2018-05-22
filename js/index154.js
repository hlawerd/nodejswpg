const player = {
    name: null,
    energy: 100,
    lifes: 3,
    loseEnergy: function(damage) {
        this.energy = this.energy - damage;
    },
    recoveryEnergy: function(energyUp) {
        this.energy = this.energy + energyUp;
    },
    looseLife: function() {
        this.lifes--;
    },
    recoveryLife: function() {
        this.lifes++;
    }
}


player.name = 'Hugo';
player.looseLife();

if (player.energy - 10 > 0) {
    player.loseEnergy(10);
} 

if (player.energy - 5 > 0) {
    player.loseEnergy(5);
} 
if (player.energy - 15 > 0) {
    player.loseEnergy(15);
}    

if (player.energy - 20 > 0) {
    player.loseEnergy(20); 
}
if (player.energy - 15 > 0) {
    player.loseEnergy(5);           
}
player.recoveryEnergy(10);

if (player.energy - 30 > 0) {
    player.loseEnergy(30);           
}

if (player.energy - 40 > 0) {
    player.loseEnergy(40);           
}

if (player.energy < 0) {
    player.energy = 0;
    player.looseLife();
    player.recoveryLife();  
    player.recoveryLife();
}

console.log(`The ${player.name} has ${player.energy} energy and ${player.lifes} lifes`);