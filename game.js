var rock = document.getElementById('piedra')
var paper = document.getElementById('papel')
var scissors = document.getElementById('tijera')
var result = document.querySelector('.result')

const answers = ["rock" ,"paper" ,"scissors"];          //Array definido con las posibles respuestas de la computadora
// Valor de el score Global
var scorePlayer = 0
var scoreComputer = 0



rock.addEventListener('click', rockPlay)
paper.addEventListener('click', paperPlay)
scissors.addEventListener('click', scissorsPlay)


// Boton piedra
function rockPlay(e){
    var playerHand = rock.textContent
    console.log(playerHand)
    computerSelection = computerPlay()
    console.log(computerSelection)
    console.log(playRound(playerHand , computerSelection))
}

// Boton papel
function paperPlay(e){
    var playerHand = paper.textContent
    console.log(playerHand)
    computerSelection = computerPlay()
    console.log(computerSelection)
    console.log(playRound(playerHand , computerSelection))
    

}

// Boton tijera
function scissorsPlay(e){
    var playerHand = scissors.textContent
    console.log(playerHand)
    computerSelection = computerPlay()
    console.log(computerSelection)
    console.log(playRound(playerHand , computerSelection))
    
}



function computerPlay(){                                //elige una del las 3 opciones al azar
    return answers[~~(Math.random() * answers.length)];

}

function playRound(playerSelection , computerSelection ){            //funcion que devuelve el resultado final en un string 
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase()
const text = document.createElement('p')
    if(scorePlayer === 5){
        text.innerText = `Congratulations!!! The game has ended with a great victory from You ^^ \n
                            The score ends with a score of ${scorePlayer} - ${scoreComputer}`
        text.style.fontSize = '20px'                           
        text.style.color = 'red'
        result.appendChild(text)
                   
    }
    else if(scoreComputer === 5){
        text.innerText = `Oh this is such a bad new to tell you but... the game has ended \n
                            The score is ${scorePlayer} - ${scoreComputer} , my lucky ia has win`
        text.style.fontSize = '20px' 
        text.style.color = 'red'      
        result.appendChild(text)
    }
    else if (playerSelection === computerSelection){
        text.innerText = 'The round ends in a Tie'
        result.appendChild(text)
        return "The round ends in a Tie"
    }else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        scorePlayer = scorePlayer + 1
        text.innerText = `You won this round , nice luck you have there. The score is ${scorePlayer} - ${scoreComputer}`;
        result.appendChild(text)
        return `You won this round , nice luck you have there. The score is ${scorePlayer} - ${scoreComputer}`;
    }else if ((playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock")){
        scoreComputer = scoreComputer + 1
        text.innerText = `You lose this one , oh i'm so sorry to see that , now the score is ${scorePlayer} - ${scoreComputer}`
        result.appendChild(text)
        return "You lose this one , oh i'm so sorry to see that";
    }else
        return "Your choice isn't available in this game, please choose one of the permited plays";

        
}

/*
function playRound(playerSelection , computerSelection){            //funcion que devuelve el resultado final en un string 
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return "The round ends in a Tie"
    }else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return "You won this round , nice luck you have there";
    }else if ((playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock")){
        return "You lose this one , oh i'm so sorry to see that";
    }else
        return "Your choice isn't available in this game, please choose one of the permited plays";

}
*/

//const computerSelection = computerPlay();           //respuesta de la computadora
//console.log(computerSelection);



//console.log(game(playRound))

/*const playerSelection = prompt("por favor elige que quieres utilizar en la partida "  );                //respuesta del usuario
console.log(playerSelection);*/


/*console.log(playRound(playerSelection, computerSelection)); //Esto es por si solo se quiere jugar 1 partida
*/


//CODIGO PARA JUGAR 5 RONDAS
/*
function game(e){
    for (let i =0; i < 5; i++){
        computerSelection = computerPlay() ;
        console.log(`computer : ${computerSelection}`)
        valueHand = e
        console.log(playRound(valueHand , computerSelection))
        console.log(valueHand)
        }

    alert("Thanks for playing , see you around later")
}
*/

