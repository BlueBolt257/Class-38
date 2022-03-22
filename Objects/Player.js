class Player{
    constructor(){
        this.name = null;
        this.positionX = 0;
        this.positionY = 0;
        this.index = null;
    }

    //Reading the playerCount
    getCount(){
        db.ref("playerCount").on("value", (data)=>{
            pc = data.val(); //copies data from db to the pc variable
        });
    }

    //Updating the playerCount
    updateCount(count){
        db.ref("/").update({
            playerCount: count
        })
    }

    //Whenever a player enters - their info gets updated into the db
    addPlayer(){
        if(this.index===1){
            this.positionX = width/2-100
        }

        else{
            this.positionX = width/2+100
        }
        
        db.ref("players/player"+this.index).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
        });
    }

    //static functions - belong to the entire class - not to any particular object
    static getPlayersInfo(){
        db.ref("players").on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}
//"/" - refers to the entire database








