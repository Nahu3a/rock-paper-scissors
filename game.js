const answers = ["rock" ,"paper" ,"scissors"];          //Array definido con las posibles respuestas de la computadora

function computerPlay(){                                //elige una del las 3 opciones al azar
    return answers[~~(Math.random() * answers.length)];

}

function playRound(playerSelection , computerSelection){            //funcion que devuelve el resultado final en un string 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "Los dos han elegido lo mismo, esto es un empate!"
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "Has ganado , Rock le gana a Scissors";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "Lo siento, has perdido ya que Paper le gana a Rock";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "Felicidades, has ganado . Paper le gana a Rock";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "Lo siento, has perdido ya que Scissors le gana a Paper";
    }else if (playerSelection === "scissors" && computerSelection === "Rock"){
        return "Lo siento, has perdido ya que Rock le gana a Scissors";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "Felicidades, has ganado . Scissors le gana a Paper";
    }


}

/*function game(playRound){
    for (let i =0; i < 5; i++){
        let playerSelection = prompt('Elige entre piedra , papel o tijera ') ;
        console.log(playerSelection);
        let computerSelection = computerPlay();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playRound);
    }
}*/

const playerSelection = prompt("por favor elige que quieres utilizar en la partida "  );                //respuesta del usuario
console.log(playerSelection);

const computerSelection = computerPlay();           //respuesta de la computadora
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
