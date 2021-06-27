class Game{
  constructor(){
    
  }
  getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })    
    }
    
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

  async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        mainmenu = new Mainmenu();
        mainmenu.display(); 
      }
      tank1 =createSprite(100,200);
      tank1.addImage("tank1",tank1Img);
      tank2 = createSprite(1000,200);
      tank2.addImage("tank2",tank2Img);
      tanks = [tank1,tank2];
      bulletGrp = new Group();
  }
  play(){
    background("#5E7BE1");
    mainmenu.hide();
    Player.getPlayerInfo();
    drawSprites();
    if(allPlayers !== undefined){
      //tank1.rotation = World.mouseX;
      //tank1.rotation = World.mouseY;
      var index = 0;
      var x  =  100;
      var y;
      for(var plr in allPlayers){
        index = index + 1;
        x = (index *200) +  allPlayers[plr].playerX;
        y = displayHeight = allPlayers[plr].playerY;

        tanks[index - 1].x = x;
        tanks[index - 1].y = y;

        if(gameState ===  2){
          tanks[index - 1].x = x;
          tanks[index - 1].y = y;
        }else{
          if(index === player.index){
            if(keyIsDown(87) && player.index !== null){//W
                    //console.log(tanks[index-1]);
                  // tanks[index-1].mirrorY(-1);
                  tanks[index-1].rotation = 90;
                    player.playerY -= 5;
                    player.update();
                    game.bulletFun();
                    bullet.velocityY = -5;  
                  }
                  if(keyIsDown(83) && player.index !== null){//S
                    // console.log("S");
                    tanks[index-1].rotation = -90;
                     player.playerY += 5;
                     player.update();
                     game.bulletFun();
                     bullet.velocityY = 5;
                   }

                   if(bulletGrp.isTouching(tanks[index - 1])){
                    dmgt += 1;
                   }
                   if (dmgt === 6) {
                     game.update(2);
                     tanks[index - 1].destroy();
                     bulletGrp.destroyEach();
                     strokeWeight(2);
                     stroke("cyan");
                     textSize(25);
                     text("GAME OVER",650,350);
                   }
                   if(keyIsDown(65) && player.index !== null){//A
                    //console.log("A");
                    player.playerX -= 5;
                    player.update();
                    game.bulletFun();
                    bullet.velocityX = -5;
                  }
                  if(keyIsDown(68) && player.index !== null){//D
                   // console.log("D");
                    player.playerX += 5;
                    player.update();
                    game.bulletFun();
                    bullet.velocityX = 5;
                  }
            
        } 
        }
        
         
        
                    
      }

       
    }
   // console.log(player.index);   
   
    
    /*if(keyIsDown(32) && player.index !== null){
      bullet = createSprite(player.playerX,player.playerY);
      bullet.addImage("img",bulletImg);
      bullet.scale = 0.2;   
      bulletGrp.add(bullet);
    }*/
    
}
bulletFun(){  
      bullet = createSprite(player.playerX,player.playerY);
      bullet.addImage("img",bulletImg);
      bullet.scale = 0.01;   
      bulletGrp.add(bullet);
}
}