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
    const kaijiresult = document.querySelector(".kaijiresult");
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

    function rungame(){
        rpsoptions.forEach(option => {
            option.addEventListener('click',function(){
                const userInput = this.innerText;
                const gamesremaining = document.querySelector('.gamesremaining');
                matches++;

                gamesremaining.textContent = `Games Remaining: ${3-matches}`;
            

                var kajchoice = kaijichoice(); 


                console.log("kaiji: " + kajchoice);
                console.log("you: " + this.innerText);

                compareoptions(userInput, kajchoice); 

                // Total Matches
                if(matches == 3){
                    endgame(rpsoptions, gamesremaining);
                }

            })
        })
    }



    function compareoptions(userInput, kajchoice){

        userInput = userInput.toLowerCase();
        kajchoice = kajchoice.toLowerCase();

        if(userInput === kajchoice){
            playerscore++;
            kaijiscore++; 
            resultDiv.textContent = 'Wow..A Tie!'
            resultDiv.style.fontSize = '50px';
            kaijiresult.textContent = "Kaijis Choice: " + kajchoice;
            resultDiv.style.fontSize = '50px';
            playerScore_Count.textContent = playerscore; 
            kaijiScore_Count.textContent = kaijiscore; 
            
        }
        else if((userInput == 'rock' && kajchoice == 'paper') ||
                (userInput == 'scissors' && kajchoice == 'rock') ||
                (userInput == 'paper' && kajchoice == 'scissors')){
                
            resultDiv.textContent = "Kaiji wins this round!";
            resultDiv.style.fontSize = '50px';
            kaijiresult.textContent = "Kaijis Choice: " + kajchoice;
            resultDiv.style.fontSize = '50px';
            kaijiscore++; 
            kaijiScore_Count.textContent = kaijiscore; 
            playerScore_Count.textContent = playerscore; 
        }
        else{
            // No need to have the win conditions when all others
            // have been met. 
            resultDiv.textContent = "You win this round!";
            resultDiv.style.fontSize = '50px';
            kaijiresult.textContent = "Kaijis Choice: " + kajchoice;
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

        gamesremaining.style.display = 'none';


        gameover.innerText = 'Game Over!!!';
        gameover.style.fontSize = '50px';

        if(playerscore > kaijiscore){
            resultDiv.style.fontSize = '80px';
            resultDiv.innerText = 'You Won The Game'
            resultDiv.style.color = 'black';
            
        }
        else if(playerscore < kaijiscore){
            resultDiv.style.fontSize = '80px';
            resultDiv.innerText = 'You Lost The Game';
            resultDiv.style.color = 'black';
        }
        else{
            resultDiv.style.fontSize = '80px';
            resultDiv.innerText = 'Ultimate Tie';
            resultDiv.style.color = 'black'
        }


        playAgainDiv.innerText = 'Reset Debt!';
        playAgainDiv.style.display = 'flex';
        
        playAgainDiv.addEventListener('click',() => {
            window.location.reload();
        })
    }

    rungame();

}

game();






