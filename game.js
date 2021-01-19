function startGame(){
    setInterval(gametick, 1);
    marvin.sleep();
}

function gametick(){
    canvasContext.clearRect(0,0, gameCanvas.width, gameCanvas.height);
    canvasContext.drawImage(richard.image, richard.x, richard.y);
    canvasContext.drawImage(marvin.image, marvin.x, marvin.y);
    if(richard.isSmoking && gameIsRunning){
        if(marvin.isWatching){
            gameOver();
        }else{
            score++;
            scoreDiv.innerHTML = score;
        }
    }
}

function gameOver(){
    gameIsRunning = false;
    punshIntervalId = setInterval(moveMarvin, 1);
}

function moveMarvin(){
    if(marvin.x !== richard.x+130){
        marvin.x--;
    }else{
        if(punshIntervalId)
            clearInterval(punshIntervalId);
        punshIntervalId = undefined;
        marvin.punsh();
        setTimeout(init, 2500);
    }
}

function handleKeyPressed(e){
    if(e.keyCode == 32){ // spacebar
        richard.smoke();
    }
}

function handleKeyUp(e){
    if(e.keyCode == 32){ // spacebar
        richard.chill();
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min; 
}