//Namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground, ball;


function setup() {
  createCanvas(400,400);

  //Create a physics engine
    engine = Engine.create();

  //create a new world using the engine
  world = engine.world;

  //JSON to define additional properties
  var ground_options = {
    isStatic: true  
  }
  //create the objects/bodies
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  //Add body to the world
  World.add(world, ground);

  var ball_options = {
    restitution : 1
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world, ball);
 
}

function draw() {
  background(0);  //black

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
}