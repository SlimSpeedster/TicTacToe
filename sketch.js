var canvas;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
//var width = displayWidth-200;
//var height = displayHeight-150;
var gameState = 0;
var form, player, game;
var allPlayers;
var database;
var gameObject;
var playerCount;
var playerTurn;


function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-20);
  database = firebase.database();
  
  box1 = createSprite(width-810, height/4, 100, 100);
  box2 = createSprite(width/2+140, height/4, 100, 100);
  box3 = createSprite(width/2-20, height/4, 100, 100);
  box4 = createSprite(width-810, height/3+95, 100, 100);
  box5 = createSprite(width/2+140, height/3+95, 100, 100);
  box6 = createSprite(width/2-20, height/3+95, 100, 100);
  box7 = createSprite(width-810, height/2+150, 100, 100);
  box8 = createSprite(width/2+140, height/2+150, 100, 100);
  box9 = createSprite(width/2-20, height/2+150, 100, 100);

  //box1.shapeColor = "red"
  //box4.shapeColor = "red"
  //box7.shapeColor = "red"
  //box2.shapeColor = "green"
  //box5.shapeColor = "green"
  //box8.shapeColor = "green"
  //box3.shapeColor = "purple"
  //box6.shapeColor = "purple"
  //box9.shapeColor = "purple"
}


function draw(){
  background("skyblue");

if(gameState != 2){

  box1.visible = false;
  box2.visible = false;
  box3.visible = false;
  box4.visible = false;
  box5.visible = false;
  box6.visible = false;
  box7.visible = false;
  box8.visible = false;
  box9.visible = false;

}

if(gameState === 2){

  box1.visible = true;
  box2.visible = true;
  box3.visible = true;
  box4.visible = true;
  box5.visible = true;
  box6.visible = true;
  box7.visible = true;
  box8.visible = true;
  box9.visible = true;

  }


  gameObject = new Game();
  gameObject.getState();
  gameObject.start();

  if(gameState === 1){

    form.hide();

  }

  //console.log(gameState);
  drawSprites();
}