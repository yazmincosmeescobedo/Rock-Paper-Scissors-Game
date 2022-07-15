function game(){

    /* Global Vars and Constants */
    var playerscore = 0;
    var kaijiscore = 0; 
    var playerScore_Count = document.querySelector(".playercount");
    var kaijiScore_Count = document.querySelector(".kaijicount");
    var matches = 0; 
    const computerOptions = ['rock','scissors', 'paper'];
    const scoreboard = document.querySelector(".scoreboard");
    const resultDiv = document.querySelector(".result");
    const playAgainDiv = document.querySelector('.playagain')
    const rockbutton = document.querySelector('.rock');
    const scissorsbutton = document.querySelector('.scissors');
    const paperbutton = document.querySelector('.paper');
    const rpsoptions = [rockbutton, scissorsbutton, paperbutton];
    const rpsoptionskaj = ['rock', 'paper', 'scissors'];




    function kaijichoice(){
        var randomNum = Math.floor((Math.random() * 3));
            return computerOptions[randomNum];
    }

    function rungame(userInput){
        rpsoptions.forEach(option => {
            option.addEventListener('click',function(){
                const gamesremaining = document.querySelector('.gamesremaining');
                matches++;
                gamesremaining.textContent = `Games Remaining: ${3-matches}`;



                var kajchoice = kaijichoice(); 
                console.log("kaiji: " + kajchoice);
                console.log("you: " + userInput);

                compareoptions(userInput, kajchoice); 

                // Total Matches
                if(matches == 3){
                    endgame(rpsoptions, gamesremaining);
                }

            })
        })
    }



    function compareoptions(userInput, kajchoice){

        if(userInput === kajchoice){
            playerscore++;
            kaijiscore++; 
            resultDiv.textContent = 'This round is a tie!'
            resultDiv.style.fontSize = '50px';
            playerScore_Count.textContent = playerscore; 
            kaijiScore_Count.textContent = kaijiscore; 
            
        }
        else if((userInput == 'rock' && kajchoice == 'paper') ||
                (userInput == 'scissors' && kajchoice == 'rock') ||
                (userInput == 'paper' && kajchoice == 'scissors')){
                
            resultDiv.textContent = "Kaiji wins this round";
            resultDiv.style.fontSize = '50px';
            kaijiscore++; 
            kaijiScore_Count.textContent = kaijiscore; 
            playerScore_Count.textContent = playerscore; 
        }
        else{
            // No need to have the win conditions when all others
            // have been met. 
            resultDiv.textContent = "You win this round";
            resultDiv.style.fontSize = '50px';
            playerscore++; 
            playerScore_Count.textContent = playerscore; 
            kaijiScore_Count.textContent = kaijiscore; 
        }
        
    }

    function endgame(rpsoptions, gamesremaining){
        const gameover = document.querySelector('.gameover');
        

        rpsoptions.forEach(option => {
            option.style.display = 'none';
        })

        gamesremaining.style.display = 'flex';
        gamesremaining.style.position = 'absolute';
        gamesremaining.style.width = '250px';
        gamesremaining.style.top = '46px';
        gamesremaining.style.left = '910px';
        gamesremaining.style.zIndex = '2';
        gamesremaining.style.fontSize = '25px';


        gameover.innerText = 'Game Over!!!';
        gameover.style.fontSize = '50px';

        if(playerscore > kaijiscore){
            resultDiv.style.fontSize = '80px';
            resultDiv.innerText = 'You Won The Game'
            resultDiv.style.color = '#308D46';
        }
        else if(playerscore < kaijiscore){
            resultDiv.style.fontSize = '80px';
            resultDiv.innerText = 'You Lost The Game';
            resultDiv.style.color = 'red';
        }
        else{
            resultDiv.style.fontSize = '80px';
            resultDiv.innerText = 'Tie';
            resultDiv.style.color = 'grey'
        }


        playAgainDiv.innerText = 'Reset Debt!';
        playAgainDiv.style.display = 'flex';
        
        playAgainDiv.addEventListener('click',() => {
            window.location.reload();
        })
    }

    function main(){
        rockbutton.addEventListener('click', function() {
            rungame("rock");
        })
        paperbutton.addEventListener('click', function() {
            rungame("paper");
        })

        scissorsbutton.addEventListener('click', function() {
            rungame("scissors");
        })
            
    }

    main();

}

game();






