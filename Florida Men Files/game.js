class Game {
    constructor() {}

    getState(){
        var gameStateRef = db.ref("Gamestate");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    updateState(state){
        db.ref("/").update({
            Gamestate : state
        });
    }
    start(){
        if(gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        
    }

    play() {
        form.greeting.hide();
        Player.getPlayersInfo();

        if(allPlayers !== undefined) {
            textSize(20);
            text("Game started", 50, 50);
            var yPos = 200;

            for(var plr in allPlayers) {
                if(plr === "player" + player.index) {
                    fill("red");
                } else {
                    fill("black");
                }
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 100, yPos);
                yPos += 40;
            }
            if (keyDown(UP_ARROW)){
                player.distance+=10;
                player.update();
            }
        }
    }
}





