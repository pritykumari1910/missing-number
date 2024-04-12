// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'red';
    } else if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber}.`;
        message.style.color = 'darkred';
    } else if (guess < randomNumber) {
        message.textContent = 'Too low. Try again.';
        message.style.color = 'orange';
    } else {
        message.textContent = 'Too high. Try again.';
        message.style.color = 'yellow';
    }
}
