var gameCanvas;
var canvasContext;
var scoreDiv;
var score = 0;
var richard;
var marvin;
var gameIsRunning;
var punshIntervalId;

window.onload = init;
function init(){
    document.addEventListener("keypress", handleKeyPressed);
    document.addEventListener("keyup", handleKeyUp)

    scoreDiv = document.getElementById("score");
    scoreDiv.innerHTML = "0";
    gameCanvas = document.getElementById("gamecanvas");
    canvasContext = gameCanvas.getContext("2d");
    score = 0;
    richard = new Richard(false, 20, 20, imgRichChill);
    marvin = new Marvin(false, 500, 20, imgMarvIgnore);
    gameIsRunning = true;
    startGame();
}

function Richard(isSmoking, x, y, image){
    this.isSmoking = isSmoking;
    this.x = x;
    this.y = y;
    this.image = image;

    this.smoke = function(){
        this.isSmoking = true;
        this.image = imgRichSmoking;
    }

    this.chill = function(){
        this.isSmoking = false;
        this.image = imgRichChill;
    }
}

function Marvin(isWatching, x, y, image){
    this.isWatching = isWatching;
    this.x = x;
    this.y = y;
    this.image = image;

    this.punsh = function(){
        this.image = imgMarvPunsh;
    }

    this.watch = function(){
        if(gameIsRunning){
            marvin.image = imgMarvWatching;
            marvin.isWatching = true;
            setTimeout(marvin.sleep, 800);
        }
    }

    this.warn = function(){
        if(gameIsRunning){
            marvin.image = imgMarvHint;
            setTimeout(marvin.watch, 800);
        }
    }

    this.sleep = function(){
        if(gameIsRunning){
            marvin.image = imgMarvIgnore;
            marvin.isWatching = false;
            var addMillis = getRandomIntInclusive(0, 5) * 1000;
            setTimeout(marvin.warn, 2000+addMillis);
        }
    }
}

// images rich
var imgRichChill = new Image(200, 200);
imgRichChill.src = "images/richard_chill.png";
var imgRichSmoking = new Image(200, 200);
imgRichSmoking.src = "images/richard_smoking.png";


// images marv
var imgMarvHint = new Image(200, 200);
imgMarvHint.src = "images/marvin_hint.png";
var imgMarvIgnore = new Image(200, 200);
imgMarvIgnore.src = "images/marvin_ignore.png";
var imgMarvPunsh = new Image(200, 200);
imgMarvPunsh.src = "images/marvin_punsh.png";
var imgMarvWatching = new Image(200, 200);
imgMarvWatching.src = "images/marvin_watching.png";

