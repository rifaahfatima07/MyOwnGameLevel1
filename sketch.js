var gameState = 0;
var bg, bg1;
var button;
var input;
var reset;
var database;
var allPlayers;
var players, index;

var form, player, game;
var playerCount;
var player1, player2, player3, player4, player5;
var d1, d2, c;
var c1, c2, c3, c4, clue;

function preload(){
  
  bg = loadImage("images/detective image.jpg");
  bg1 = loadImage("images/enchantedForest.jpg");
  d1 = loadImage("images/detective-150.png");
  d2 = loadImage("images/murderer.png");
  c = loadImage("images/clues.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1600,800);

  game = new Game();
  game.getState();
  game.start();

  player1 = createSprite(130, 700, 20, 20);
    player1.addImage(d1);
    player1.scale=0.5;
    player1.visible = false;

    player2 = createSprite(180, 700, 20, 20);
    player2.addImage(d1);
    player2.scale=0.5;
    player2.visible = false;

    player3 = createSprite(230, 700, 20, 20);
    player3.addImage(d1);
    player3.scale=0.5;
    player3.visible = false;

    player4 = createSprite(300, 700, 20,20);
    player4.addImage(d1);
    player4.scale=0.5;
    player4.visible = false;

    player5 = createSprite(380, 700, 20, 20);
    player5.addImage(d1);
    player5.scale=0.5;
    player5.visible = false;

    c1 = createSprite(1200, 680, 20, 20);
    c1.addImage(c);
    c1.scale=0.02;
    c1.visible = false;

    c2 = createSprite(100, 600, 20,20);
    c2.addImage(c);
    c2.scale=0.02;
    c2.visible = false;

    c3 = createSprite(400, 200, 20, 20);
    c3.addImage(c);
    c3.scale=0.02;
    c3.visible = false;

    c4 = createSprite(700, 300, 20, 20);
    c4.addImage(c);
    c4.scale=0.02;
    c4.visible = false;
  
}

function draw() {
  background(255,255,255); 
  
  if (gameState === 0){
    background(bg);

    

    textSize(60);
    fill("white");
    text("WELCOME TO THE DETECTIVE GAME", 100, 400);

   if (playerCount === 5){
     gameState=1;
     game.update(1);
   }
  }

  if (gameState === 1){
    //background("green");
    background(bg1);

    textSize(30);
    fill("white");
    text("LEVEL 1", 800, 50);

    textSize(20);
    fill("white");
    text("NOTE: FIND ALL THE CLUES HIDDEN IN THE ENCHANTED FOREST", 130, 100);

    player1.visible = true;
    player2.visible = true;
    player3.visible = true;
    player4.visible = true;
    player5.visible = true;

    if(index === 1){
      player1.x = mouseX;
      player1.y = mouseY;
    }

    if (index === 2){
      player2.x = mouseX;
      player2.y = mouseY;
    }

    if (index === 3){
      player3.x = mouseX;
      player3.y = mouseY;
    }

    if (index === 4){
      player4.x = mouseX;
      player4.y = mouseY;
    }

    if (index === 5){
      player5.x = mouseX;
      player5.y = mouseY;
    }

    c1.visible = true;

    if (player1.isTouching(c1) || player2.isTouching(c1) || player3.isTouching(c1) || player4.isTouching(c1) || player5.isTouching(c1)){
      c1.visible = false;
      c2.visible = true;
      textSize(15);
      fill("white");
      text("1. Look look see everywhere. You will find the next clue from where you started", 130, 150);
    }

    if (player1.isTouching(c2) || player2.isTouching(c2) || player3.isTouching(c2) || player4.isTouching(c2) || player5.isTouching(c2)){
      c2.visible = false;
      c3.visible = true;
      textSize(15);
      fill("white");
      text("2. You get shade, you get paper", 130, 150);
    }

    if (player1.isTouching(c3) || player2.isTouching(c3) || player3.isTouching(c3) || player4.isTouching(c3) || player5.isTouching(c3)){
      c3.visible = false;
      c4.visible = true;
      textSize(15);
      fill("white");
      text("Another set of papers", 130, 150);
    }

    if (player1.isTouching(c4) || player2.isTouching(c4) || player3.isTouching(c4) || player4.isTouching(c4) || player5.isTouching(c4)){
      player1.visible = false;
      player2.visible = false;
      player3.visible = false;
      player4.visible = false;
      player5.visible = false;

      c1.visible = false;
      c2.visible = false;
      c3.visible = false;
      c4.visible = false;

      textSize(30);
      fill("yellow");
      text("LEVEL 1 CLEARED", 800, 400);
    }

    drawSprites();

    
  }

  
}