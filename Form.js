class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("WELCOME TO THE DETECTIVE GAME");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    var reset = createButton('RESET');
    
    input.position(130, 500);
    button.position(300, 500);
    reset.position(1000, 50);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();

      textSize(30);
      fill("white");
      
      playerCount+=1;
      index = playerCount;
      player.update(name)
      player.updateCount(playerCount);
      
    });

    reset.mousePressed(function(){
      player.updateCount(0);
      game.update(0);
    })

  }
}