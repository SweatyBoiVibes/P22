var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	engine = Engine.create()
  world = engine.world

packageSprite = createSprite(width/2, 80, 10,10)
packageSprite.addImage(packageIMG)
packageSprite.scale=0.3

helicopterSprite = createSprite(width/2, 200,10,10)
helicopterSprite.addImage(helicopterIMG)
  
groundSprite = createSprite (width/2, height-35, width, 10)
groundSprite.shapeColor = color(255)



packageBody = Bodies.circle(width/2, 200, 5, {restitution:1, isStatic:true})
World.add(world,packageBody)


ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true})
World.add(world,ground)

var hi = {
  isStatic:true
}

Left = Bodies.rectangle(300, 550, 20, 300, hi)
World.add(world, Left)


Right = Bodies.rectangle(530, 550, 20, 300, hi)
World.add(world, Right)

base=createSprite(440, 630, 250, 20)
Base = Bodies.rectangle(380, 630, 180, 20, hi)
World.add(world, Base)



}


function draw() {

  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rect(Left.position.x,Left.position.y,20,150)
  rect(Right.position.x,Right.position.y,20,150)
  rect(Base.position.x,Base.position.y,200,20)

 packageSprite.collide(base)
 

 
  drawSprites();
 
}



function keyPressed(){
  if(keyCode===DOWN_ARROW){
    Matter.Body.setStatic(packageBody, false)
  }
}