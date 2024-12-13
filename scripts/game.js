
// Shows how many attempts were made and creates a random Number
var attempts = 1;
var randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum) // Check the curr num to cheat
function guess(){
    // Gets the guess from the numGuessed input and converts it into an int/num
    let userGuess = parseInt(document.getElementById("numGuessed").value);
    // Resets the page so the user can guess again after they won
    document.getElementById("won").src = "";
    document.getElementById("won").style="width: 0px; height: 0px;";
    document.getElementById("guessesMade").innerHTML = "";
    document.getElementById("tryAgain").value = "Submit";
    // Checks to see if guess is not equal to the random number. 
    if(userGuess != randNum){
        attempts++;
        if(userGuess < randNum){ // If guess is lower than randNum then You need to guess higher will be displayed
            document.getElementById("outcome").innerHTML = "You need to guess higher!";
        }else if(userGuess > randNum){ // If the guess is higher than randNum then You need guess lower will be displayed
            document.getElementById("outcome").innerHTML = "You need to guess lower!";
        }else{ // If the user did not enter a number then You need to enter a number will be displayed
            document.getElementById("outcome").innerHTML = "You need to enter a number";
        }
    }else{
        // Displays cat gif, how many guesses the user made, they won, and what the random number was
        document.getElementById("won").style="width: 250px; height: 250px;";
        document.getElementById("won").src = "../images/sillycatHappy.gif";
        document.getElementById("outcome").innerHTML = "You Won! The number was: " + randNum.toString();
        document.getElementById("guessesMade").innerHTML = "You made " + attempts.toString() + " guesses!"
        // Makes a new random number, changes the submit button to try again, resets attempts to 0, and numGuessed 
        randNum = Math.floor(Math.random() * 100) + 1;
        document.getElementById("tryAgain").value = "Try Again";
        document.getElementById("numGuessed").value = "";
        attempts = 0;
    }
}
