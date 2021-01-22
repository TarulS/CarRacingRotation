class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
    this.horizontal = 0 ; 
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
      name:this.name,
      distance:this.distance,
      horizontal : this.horizontal
    });
  }
  getCarEnd(){
    var CarendRef = database.ref('CarEnd')
    CarendRef.on("value", data=>{
      this.rank = data.val();
    })
  }
  static UpdateEnd(rank){
    database.ref("/").update({
      CarEnd:rank,
    })
  }


  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
