// Setting the scores and selecting our HTML elements.
let computerScore = 1;
let playerScore = 1;
var pScore = document.getElementById('playerScore');
var cScore = document.getElementById('computerScore');
var buttons = document.querySelectorAll('.selection button');
var showIcon = document.querySelector('.show i');
var computerShowIcon = document.querySelector('.computer i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
var randomClasses = ["far fa-hand-rock", "far fa-hand-paper","far fa-hand-scissors"];
var text = document.getElementById('demo');
var text2 = document.getElementById('demo2');

// Game Functionality: Setting forEach function for the buttons.
var game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           // Game Score.
           // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Draw! ";
               text.style.color = 'blue';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'blue';
           } 
          // if it's not a Tie.
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "You Win! ";
               text.style.color = 'purple';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'purple';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Lose! ";
               text.style.color = 'green';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'green';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Lose! ";
               text.style.color = 'green';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'green';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "You win! ";
               text.style.color = 'purple';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'purple';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Lose! ";
               text.style.color = 'green';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'green';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "You Win! ";
               text.style.color = 'purple';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'purple';
           }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.