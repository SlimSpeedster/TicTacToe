class Form{

    constructor(){

        this.title = createElement('h1');
        this.text = createInput('Name');
        this.button = createButton('Ready');
        this.greeting = createElement('h2');
        this.buttonX = createButton('X');
        this.buttonO = createButton('O');
    }
    hide(){

        this.text.hide();
        this.button.hide();
        this.greeting.hide();
        this.buttonX.hide();
        this.buttonO.hide();

    }

    display(){

        this.title.html('TicTacToe');
        this.title.position(displayWidth/2-75,25);
        
        this.text.position(displayWidth/2-100, displayHeight/2)
        this.button.position(displayWidth/2+75, displayHeight/2)
        this.buttonX.position(displayWidth*.4, displayHeight*.66)
        this.buttonO.position(displayWidth*.6, displayHeight*.66)
        

        //this is here
        this.button.mousePressed(()=>{

        this.greeting.html('Welcome to TicTacToe!');
        this.greeting.position(displayWidth/2-130, displayHeight/2);
    
        player.name = this.text.val();
        player.update();
        playerCount += 1;
        player.index = playerCount;
        player.updateCount(playerCount);
        
        gameState = 1;
        
        })
    }


}

//createElement