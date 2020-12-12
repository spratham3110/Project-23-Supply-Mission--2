var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redbox1, redbox2, redbox3;
var redbox1body, redbox2body, redbox3body;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redbox1=createSprite(290,610,20,100);
	redbox1.shapeColor=color(255,0,0);

	redbox2=createSprite(400,650,200,20);
	redbox2.shapeColor=color(255,0,0);
	
	redbox3=createSprite(510,610,20,100);
	redbox3.shapeColor=color(255,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true} );
	World.add(world, packageBody);
	
	redbox1body = Bodies.rectangle(290,610,20,100,{isStatic:true});
	World.add(world, redbox1body);

	redbox2body = Bodies.rectangle(400,630,200,20,{isStatic:true});
	World.add(world, redbox2body);

	redbox3body = Bodies.rectangle(510,610,20,100,{isStatic:true});
	World.add(world, redbox3body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  redbox1.x= redbox1body.position.x
  redbox1.y= redbox1body.position.y

  redbox3.x= redbox3body.position.x
  redbox3.y= redbox3body.position.y

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
 }
}