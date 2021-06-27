var mainmenu;
var game;
var player;
//var WAIT = 0,PLAY = 1;
var gameState = 0;
var database,playerCount;
var bg; 
var bg1;
var imgrand;
var tankimg1;
var tank1,tank2,tank3,tank4,tank5,tank6;
var tanks;
var allPlayers;
var tank2Img;
var bullet;
var bulletImg;
var bulletGrp;
var dmgt = 0;
function preload(){
  bg = loadImage("imagees/bg2.jpg");
  bg1 = loadImage("imagees/bg1.png");
  tank1Img = loadImage("imagees/tank1.png");
  tank2Img = loadImage("imagees/tank2.png");
  bulletImg = loadImage("imagees/bullet.png");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  player = new Player();
  //imgrand = Math.round(random(1,2));
}

function draw() {
  background(bg);
  
 
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
 
  
  //drawSprites();
}