function numberGenerator() {
    return Math.floor(Math.random() * (6 - 1) + 1);    
};

// let dice = numberGenerator();


// function Dog(name, colors, age) {
//     this.name = name;
//     this.colors = colors;
//     this.age = age;
//   }

function Player(score, activePlayer) {
    this.score = score;
    this.activePlayer = activePlayer;
}

// let Player1 = {

// };

// let Player2 = {

// };

Player.prototype.isActive = function () {
 
    if(player1 != player2 && player1 == 1){
    activePlayer = player1;
    }else{
    activePlayer = player2;
    } 
    return activePlayer;
};

// Dog.prototype.speak = function() {
//     console.log("Woof!");
//   }

//turnTotal is to return a score

function turnTotal(currentRoll) {
   let totalScore =0;
    totalScore += currentRoll;
    // return totalScore;
    alert(totalScore);
};



function rollDice(dice){
    console.log(dice);
    if(dice == 1){
        turnTotal(0);
    }else{
        turnTotal(dice);
    }
    return turnTotal();
}


//user interface logic
$("document").ready(function() {
    let player1 = new Player(0, true);
    let player2 = new Player(0, false);
    
    $("#roll-dice").submit(function(event) {
        event.preventDefault();
        rollDice(numberGenerator());
        });
        
    });
    
    $("#hold-turn").submit(function() {
        activePlayer != activePlayer;
    });
    //  --------RESET FUNCTION-----------
    function reset() {
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output").innerHTML = "";
        document.getElementById("diceSides").value = "";
        document.getElementById("numberOfDice").value = "";
        text = "";
        rolls = [];
        
    }



    function PigDice(name){
        this.name = name;
    }
    
    var dieOne = 0;
    var dieTwo = 0;
    var tempScore = 0;
    var player = true;
    var playerOneScore  = 0;
    var playerTwoScore = 0;
    var doubles = false;
    
    PigDice.prototype.RollDie = function(min ,max) {
        return Math.random() * (max - min);
    }
    
    PigDice.prototype.roll = function() {
        var dieOne = Math.ceil(dice.RollDie(1, 6));
        var dieTwo = Math.ceil(dice.RollDie(1, 6));
        console.log(dieOne, dieTwo);
        if (doubles) {
            $("button#hold").prop("disabled", false);
            doubles = false;
        }
        if (dieOne === 1 && dieTwo === 1) {
            tempScore = 0;
            if (player) {
                playerOneScore = 0;
                $("#playerOneResults").html(" 0");
            } else if (!player) {
                playerTwoScore = 0;
                $("playerTwoResults").html(" 0");
            }
            player = !player;
            $("#rolledResult").html("snake eyes and lost all your points!");
        } else if (dieOne === 1 || dieTwo === 1) {
            tempScore = 0;
            player = !player;
            $("#rolledResult").html(dieOne + " and " + dieTwo + "!");
        } else if (dieOne === dieTwo) {
          tempScore += (dieOne + dieTwo);
          $("#currentScore").html();
          $("#rolledResult").html("doubles, " + dieOne + " and " + dieTwo + "Roll again!");
          $("button#hold").prop("disabled", true);
          doubles = true;
      } else {
          tempScore += (dieOne + dieTwo);
          $("#rolledResult").html((dieOne.toString()) + " and " + dieTwo.toString())
      }
      return tempScore;
    }
    
    PigDice.prototype.hold = function() {
        if (player) {
            playerOneScore += tempScore;
            player = !player;
            tempScore = 0;
            $("#currentScore").html("");
            if (playerOneScore >= 100) {
                $(".results").html("<p>" + name1 + "wins!<p>br>");
                $("rolledResult").show();
            } else {
                return playerOneScore;
            }
        } else if (!player) {
            playerTwoScore += tempScore;
            player = !player;
            tempScore = 0;
            $("#currentScore").html("");
            if (playerTwoScore >= 100) {
                $(".results").html("<p>" + name2 + "wins!<p>br>");
                $("rolledResult").show();
            } else {
                return playerTwoScore;
            }
        }
    }
    
    var dice = new PigDice("player");
    var name1 = "";
    var name2 = "";
    
    $(document).ready(function(event){
    
        $("button#names").click(function(event){
          event.preventDefault();
          name1 = $("#playerOne").val();
          name2 = $("#playerTwo").val();
          $("#scoreName1").html(name1);
          $("#scoreName2").html(name2);
        });
      
        $("button#roll").click(function(event){
          event.preventDefault();
          if (player) {
            $("#currentPlayer").html(name1 + ": ");
          } else if (!player) {
            $("#currentPlayer").html(name2 + ": ");
          }
          $("#currentScore").html(dice.roll());
        });
      
        $("button#hold").click(function(event){
          event.preventDefault();
          console.log("held");
      
          if (player) {
            $("#currentPlayer").html(name2 + ": ");
            $("#playerOneResults").html(" " + dice.hold());
          } else if (!player) {
            $("#currentPlayer").html(name1 + ": ");
            $("#playerTwoResults").html(" " + dice.hold());
          }
        });
      
        $("button#reset").click(function(event){
          event.preventDefault();
          location.reload(true);
        });
      });
    