var win = 0, loss = 0, guess = 10;

var inputHistory = "";

alphabet = 'abdefghijklmnopqrstuvwxyz'.split('');

var computerLetter = alphabet[Math.floor(Math.random() * 26)];

document.onkeydown = function(event) {
    
    inputHistory = inputHistory + event.key;

    if (computerLetter === event.key) {
        win++;
        computerLetter = alphabet[Math.floor(Math.random() * 26)];
        inputHistory = "";
        guess = 10;
    }
    
    else {
        guess--;
        test = 20;

    
    if (guess == 0) {
        loss++;
        computerLetter = alphabet[Math.floor(Math.random() * 26)];
        inputHistory = "";
        guess = 10;
       }
    
    }
    document.getElementById("win").innerHTML = win;
    document.getElementById("loss").innerHTML = loss;
    document.getElementById("guess").innerHTML = guess;
    document.getElementById("history").innerHTML = inputHistory;

}