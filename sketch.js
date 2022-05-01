const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage;
var rocket;
var meteorito1;
var meteorito2;
var meteorito3;

function preload (){
  backgroundImage = loadImage("background.jpg");
}


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
  rocket =new Rocket(300, 300, 150, 150);
}


function draw() 
{
  background(backgroundImage);
  Engine.update(engine);
  
}

