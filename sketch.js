
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;
var btn;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ground =new Ground(200,390,400,20);
 
 
  top_wall2 = new Ground(300,350,20,100);
  top_wall3 = new Ground(400,350,20,800);

  btn=createImg('up.png');
  btn.position(20,30);
  btn.size(50,50);
  btn.mouseClicked(vforce);

  var options = {
    restitution:0.95
  }

  ball=Bodies.circle(100,200,20,options);
  World.add(world,ball);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
 
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0.05});
}
