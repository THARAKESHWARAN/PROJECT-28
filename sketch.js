const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy;
var stoneConstraint;
var mango1, mango2, mango3, mango4;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1200, 450);
	rectMode(CENTER);

	boy = new Boy(300, 600);

	stone = new Stone(210, 560);

	stoneConstraint = new Constraints(stone.body, {x:210, y:530});

	ground = new Ground();

	mango1 = new Mango(1000, 360);
	mango2 = new Mango(1200, 300);
	mango3 = new Mango(1100, 450);
	mango4 = new Mango(1350, 440);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(255);
  
  tree.display();
  boy.display();
  stoneConstraint.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  ground.display();
  drawSprites();
 
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);

  stroke(0);
  strokeWeight(3);
  textSize(30);
  text("TO TAKE BACK THE STONE, PRESS SPACE!", 100, 50);

}

function mouseDragged(){
	Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	stoneConstraint.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stone.body, {x:210, y:560});
		stoneConstraint.attach(stone.body);
	}
}