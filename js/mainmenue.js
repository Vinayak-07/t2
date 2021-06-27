class Mainmenu{
    constructor(){
        this.username = createInput("Name");
        this.loginbutton = createButton("Play");
        this.greeting = createElement('h2');
        this.reset = createButton("Reset");
        //this.image = loadImage("imagees/bg2.jpg");
        
    }
    hide(){
        this.username.hide();
        this.loginbutton.hide();
    }
   display(){
       this.username.position(displayWidth/2 - 80,displayHeight/2 - 80);
       this.loginbutton.position(displayWidth/2 - 35,displayHeight/2 - 25);
       this.reset.position(10, 10);
       //console.log(this.image);
       //image(this.image,200,200,500,500);
       this.loginbutton.mousePressed(()=>{
       this.username.hide();
       this.loginbutton.hide();
       player.name = this.username.value();
       playerCount+=1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       
       this.greeting.html("Hello " + player.name);
       this.greeting.position(displayWidth/2 - 70,displayHeight-600);
       });


       this.reset.mousePressed(() => {
        player.updateCount(0);
        game.update(0);
  
        database.ref("/").update({
          players: null,
          
        });
      });
   }
     
}