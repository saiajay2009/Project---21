
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;           var R;
var ground;         var r;
var leftSide;       var L;
var world;          var l;
var engine;
var side;
var Side;
var s;
var S;
var rightSide

function setup() {
createCanvas(1299,605);
engine = Engine.create();
world = engine.world;

//Create the Bodies Here.

var ball_options = {
  isStatic :false,
  restitution :0.3,
  friction :0,
  density :1.2
  }
  ball = Bodies.circle(95,100,20,ball_options)
  World.add(world,ball);
  
rightSide =new Ground(649,565,20,120);
leftSide = new Ground(1000,600,20,120);
S = new Ground(1000,580,20,120);
s = new Ground(1000,530,35,120);
R = new Ground(649,520,20,120);
r = new Ground(649,475,20,120);
L = new Ground(1000,485,20,120);
l = new Ground(649,475,20,120);
Side = new Ground(649,540,20,120);
side =new Ground(95,150,30,120);
ground =new Ground(width/2,600,width,14);
Engine.run(engine);

}

function draw() {
  background(0);
  fill(57,255,20);
  rectMode(CENTER);
  //ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  leftSide.display();
  s.display();
  S.display();
  r.display();
  R.display();
  l.display();
  L.display();
  side.display();
  Side.display();
  rightSide.display();
  key_up();
  key_Right();
  key_left();
  Engine.update(engine);
  drawSprites();
}

function key_up() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:0,y:-10})
}
}


function key_Right() {
  if(keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:2,y:0})
}
}

function key_left() {
  if(keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:-2,y:0})
}
}


