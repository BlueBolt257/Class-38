class Game {
    constructor(){}

    //To read the gamestate from the db
    getState(){
        db.ref("gameState").on("value",(data)=>{
            gs = data.val();
        })
    }

    //to update changes to gamestate in db
    update(state){
        db.ref("/").update({
            gameState: state
        })
    }

    //Wait state - 0 state
    start(){
        form = new Form();
        form.display();
    
        player = new Player();
        player.getCount();

        car1 = createSprite(width/2-50,height-100);
        car1.addImage(car1Img);
        car1.scale = 0.07;
        
        car2 = createSprite(width/2+50,height-100);
        car2.addImage(car2Img);
        car2.scale = 0.07
        
    }
    
    handleElements(){
        form.hide()
        form.titleIMG.position(40,50);
        form.titleIMG.class("gameTitleAfterEffect");
    }

    play(){
        this.handleElements()
        Player.getPlayersInfo();
        
        if(allPlayers!==undefined){
            image(trackImg,0,-5*height,width,height*6);
        }
        drawSprites();
    }
    
    end(){}
}








