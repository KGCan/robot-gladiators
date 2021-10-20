var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {name: "Robo Trumble",
   attack: 14  
}
];

//function to generate a random numerc value
var randomNumber = function(40, 60) {
var value = Math.floor(Math.random() * (60 - 40 + 1)) + 40;

return value;
};

console.log(enemyNames);
console.log(enemyInfo.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  console.log(enemy);
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

//generate random damage value based on player's attack power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

enemy.health = Math.max(0,enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack); 
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
  //reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.Money = 10;

for (var i = 0; i < enemyInfo.length; i++) {
  if (playerInfo.health > 0) {
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    var pickedEnemyObj = enemyInfo[i];

    pickedEnemyObj.health =randomNumber(40,60);

    fight(pickedEnemyObj);
  }

  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;

    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();

    //play again
    startGame();
  }
}
}

//function to end the entire game
var endGame = function() {
  //if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + "." );
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  //ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame ();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
  window.alert("the game has now ended. Let's see how you did!");
}

var shop = function() {
  console.log("entered the shop");
}

//start the game when the page loads 
startGame();