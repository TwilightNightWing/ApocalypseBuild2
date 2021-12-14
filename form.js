class Form {
    constructor() {
    this.input = createInput("Nombre")
    this.button = createButton('Play')
    this.greeting = createElement('h2')
    var title = createElement('h2')
    }
     hide(){
      this.greeting.hide();
      this.button.hide();
      this.title.hide();
      this.input.hide();
     }
    display(){
    this.title.html("Apocalypse Build");
    this.title.position(displayWidth/2 -50, 0);
    
    this.input.position(displayWidth/2 -50, dislplayHeight/2 -80);
    this.button.position(displayWidth/2 +30, dislplayHeight/2);
  
  
      this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
  
        var name = input.value();
        
        //playerCount+=1;
        //player.update(name)
        //player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Welcome to Apocalypse Build" + name )
        greeting.position(130, 160)
      });
  
    }
  }
  