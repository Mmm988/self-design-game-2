var backgroundImg;
var player1,player2;
var player1Img,player2Img;
var monster1,monster2;
var monster1Img,monster2Img;
var monsterGroup,bombGroup;
var gameState=0;
var database;
var bomb,bombImg;
var form,game,player;
var allPlayer;
var planes;
var playerCount;
var score1,score2;


function preload(){
  backgroundImg=loadImage("space.png")
  player1Img=loadImage("plane1.png")
  player2Img=loadImage("plane2.png")
  monster1Img=loadImage("monster1.png")
  monster2Img=loadImage("monster2.png")
  bombImg=loadImage("bomb.png")
}

function setup(){
  createCanvas(800,900)

  database=firebase.database()

  game=new Game()
  game.getState()
  game.start()

  monsterGroup=new Group()
  bombGroup=new Group()
}

function draw(){
  background(backgroundImg)

  if(gameState===1){
    clear();
    game.play()
    monsters1()
    monsters2()
    bombing()
  }
  if(gameState===2){
    game.end();
  }
  if(playerCount===2 && gameState===0){
    game.update(1)
  }

  if(monsterGroup.isTouching(player1)){
    game.update(2)
  }
  if(monsterGroup.isTouching(player2)){
    game.update(2)
  }
  if(bombGroup.isTouching(player1)){
    game.update(2)
  }
  if(bombGroup.isTouching(player2)){
    game.update(2)
  }
}


function monsters1(){
  if(frameCount%100===0){
  monster1=createSprite(random(50,750),0)
  monster1.addImage(monster1Img)
  monster1.scale=0.2
  monster1.velocityY=4
  monsterGroup.add(monster1)
  }
}


function monsters2(){
  if(frameCount%150===0){
  monster2=createSprite(random(50,750),0)
  monster2.addImage(monster2Img)
  monster2.scale=0.2
  monster2.velocityY=4
  monsterGroup.add(monster2)
  }
}


function bombing(){
  if(frameCount%400===0){
  bomb=createSprite(random(50,750),0)
  bomb.addImage(bombImg)
  bomb.scale=0.2
  bomb.velocityY=4
  bombGroup.add(bomb)
  }
}