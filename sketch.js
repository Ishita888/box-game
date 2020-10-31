const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground;
var engine;
var world;
var box;
var box1;
function setup() { 
 
createCanvas(400,400);
engine=Engine.create(); 
world=engine.world; 


box=new Box(200,300,50,50);
box1=new Box(240,100,50,100);
ground=new Ground(200,height,400,20);
       
} 

function draw() { 
background(255,255,255); 
Engine.update(engine);
console.log(box1.body.position.x)
console.log(box.body.position.y)
console.log(box1.body.angle)
 box.display();
 box1.display();
 ground.display();
}