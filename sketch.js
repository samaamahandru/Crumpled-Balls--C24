
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;

var paper;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	
	
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,600,800,40);
	paper= new Paper(400,350,50,50);
	dustbin= new Dustbin(650,590,100,100);
	dustbin1= new
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper.display();
  dustbin.display();
}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
 } 


