class Form {
    constructor() {
        this.input = createInput("");
        this.input.position(250, 200);

        this.button = createButton("Start");
        this.button.position(300, 220);

        this.greeting = createElement("h2");
        this.greeting.position(250, 250);
    }

    display() {
        var title = createElement("h1");
        title.position(250, 20);
        title.html("Car Racing Game");        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.updateCount(playerCount);
            player.index = playerCount;
            player.update();
            this.greeting.html("Hi " + player.name);
        });

    }
}

