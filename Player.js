    class Player {
        constructor(){
          this.index = null; 
          this.name = null;
          this.rank = null;
        }
      
        getCount(){
          var playerCountRef = database.ref('playerCount');
          playerCountRef.on("value",(data)=>{
            playerCount = data.val();
          })
        }
      
        updateCount(count){
          database.ref('/').update({
            playerCount: count
          });
        }
      
        update(){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).set({
            name:this.name
            
          });
      
        }
      
//it is static when the function is not dependant on any specific OBJECT(dependant on the player crossing the finish line, not a button)

      //static is the function that is called by the classes, not an object
        static getPlayerInfo(){
          var playerInfoRef = database.ref('players');
          playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
          })
        }
      }
      



