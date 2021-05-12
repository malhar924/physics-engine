const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Bodies;
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var option1={
    restitution:1
  }
  object=Body.rectangle(200,200,50,50,option1);
  World.add(world,object)
  console.log(object)
  var option={
    isStatic:true
  }
  ground=Body.rectangle(400,400,800,50,option);
  World.add(world,ground)
  ball=Body.circle(300,100,25,option1);
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
rectMode(CENTER)
rect(object.position.x,object.position.y,50,50);
Engine.update(engine)
rect(ground.position.x,ground.position.y,800,50);
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,25,25);
}