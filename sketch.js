var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 box1= new Box(280,590,15,150);
	 box2= new Box(480,590,15,150);
	 box3= new Box(380,650,190,15);
ground= new Ground(380,656,200,10);
	
	
	
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= helicopterSprite.position.x 
  packageSprite.y= packageBody.position.y 
  
  helicopterSprite.velocityX=0; 
 box1.display();
 box2.display();
 box3.display();
 keyPressed();

 if(keyDown(LEFT_ARROW)){
helicopterSprite.velocityX=-15;	 
 }
 if(keyDown(RIGHT_ARROW)){
	helicopterSprite.velocityX=15;	 
	 }
	 
 drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody, false);

    
  }
}



