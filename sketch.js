var gameState = 0;
var playerCount = 0;
var game, form, player;
var db;
var allPlayers;

function setup(){
    createCanvas(500,500);
    db = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 4 && gameState === 0) {
        game.updateState(1);
    }

    if(gameState === 1) {
        game.play();
    }
    drawSprites();
}
