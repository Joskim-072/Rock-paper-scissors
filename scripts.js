let rockBtn = document.querySelector(`.rock-btn`);
        let paperBtn = document.querySelector(`.paper-btn`);
        let scissorsBtn = document.querySelector(`.scissors-btn`);
        let userChoice = document.querySelector(`.user-choice`);
        let computerChoice = document.querySelector(`.computer-choice`);
        let resultText = document.querySelector('.result');
        let winner = document.querySelector(".winner");

        rockBtn.addEventListener('click', () => {
            userChoice.textContent = 'Rock';
            computerChoice.textContent = randomNumber();
            if (userChoice.textContent === computerChoice.textContent) {
                resultText.textContent = "It's a tie!"
            } else if (computerChoice.textContent === 'Scissors'){
                resultText.textContent = 'You win!';
            }else{
                resultText.textContent = 'Computer wins!';
            };
        });
        paperBtn.addEventListener('click', () => {
            userChoice.textContent = 'Paper';
            computerChoice.textContent = randomNumber();
            if (userChoice.textContent === computerChoice.textContent) {
                resultText.textContent = "It's a tie!"
            } else if (computerChoice.textContent === 'Scissors'){
                resultText.textContent = 'You Loose!';
            }else{
                resultText.textContent = 'You win!';
            };
        });
        scissorsBtn.addEventListener('click', () => {
            userChoice.textContent = 'Scissors';
            computerChoice.textContent = randomNumber();
            if (userChoice.textContent === computerChoice.textContent) {
                resultText.textContent = "It's a tie!"
            } else if (computerChoice.textContent === 'paper'){
                resultText.textContent = 'You Win!';
            } else{
                resultText.textContent = 'You Loose!';
            }
        });

        //function to generate random number from 01 to 3
        function randomNumber() {
            let randomNum = Math.floor(Math.random() * 3);
            if (randomNum === 1) {
                return 'Rock';
            } else if (randomNum ===2 ) {
                return 'Paper';
            } else {
                return 'Scissors';
            }
        };