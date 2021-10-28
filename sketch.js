
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, brick, tower
function preload() {
bg = loadImage("./assets/Road.png")
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  brick = new Brick(200, 300, 40, 20)
  brick2 = new Brick(300, 300, 40, 20)
  tower = new Tower(100, 200, 200, 220)
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  brick.display()
  brick2.display()
  tower.display()
}

