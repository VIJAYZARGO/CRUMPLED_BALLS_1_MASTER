var ball,ground
var left, right, bottom;
var backgroundImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
		
function preload()
{
	backgroundImg = loadImage("ground.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		restitution:0.3,
		isStatic:false,
		friction:0.5,
		density:1.2
	}

	ball = Bodies.circle(200,100,5,options);
	World.add(world, ball);

	ground = Bodies.rectangle(200,670,100,50,{isStatic:true});
 	World.add(world, ground);

	bottom = createSprite(600,658,170,10,{isStatic:true});
	right = createSprite(520,615,10,120,{isStatic:true});
	left = createSprite(680,615,10,120,{isStatic:true});

	Engine.run(engine);
  
}


function draw() {
  background(backgroundImg);
  
	Engine.update(engine);
	ellipseMode(RADIUS);
	ellipse(ball.position.x,ball.position.y,20,20);

	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,1200,20);
	
	//KeyPressed();

	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



