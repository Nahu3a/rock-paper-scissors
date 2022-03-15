const answers = ["rock" ,"paper" ,"scissors"];          //Array definido con las posibles respuestas de la computadora

function computerPlay(){                                //elige una del las 3 opciones al azar
    return answers[~~(Math.random() * answers.length)];

}

function playRound(playerSelection , computerSelection){            //funcion que devuelve el resultado final en un string 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "The round ends in a Tie"
    }else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return "You won this round , nice luck you have there";
    }else if ((playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "Rock")){
        return "You lose this one , oh i'm so sorry to see that";
    }else
        return "Your choice isn't available in this game, please choose the permite plays";

}

function game(playRound){
    for (let i =0; i < 5; i++){
        let playerSelection = prompt('Please select between these 3 choices: Rock, Paper or Scissors ') ;
        console.log(playerSelection);
        let computerSelection = computerPlay();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

    alert("Thanks for playing , see you around later")
}

console.log(game(playRound))

/*const playerSelection = prompt("por favor elige que quieres utilizar en la partida "  );                //respuesta del usuario
console.log(playerSelection);

const computerSelection = computerPlay();           //respuesta de la computadora
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));*/ //Esto es por si solo se quiere jugar 1 partida

