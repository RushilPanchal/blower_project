const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world

var ball
var blower
var blowerMouth
var btn


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(width/2+80, height/2-80, 80, 80)
  blower = new Blower(width/2-80, height/2+50, 150, 20)
  blowerMouth = new BlowerMouth(width/2+70, height/2+20, 100, 90)

  btn = createButton("Click to Blow");
  btn.position(width/2, height - 100);
  btn.class("blowButton")
  btn.mousePressed(blow);
  
  
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine)
  ball.show()
  blower.show()
  blowerMouth.show()


  
}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05})
}
 