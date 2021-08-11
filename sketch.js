const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1,base2;
var computer,computer2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    base1=new Base(width-250,450,200,200)
    computer=new Computer(base1.body.position.x,base1.body.position.y-130,50,125)
    base2=new Base(width-1250,450,200,200)
    computer2=new Computer(base2.body.position.x,base2.body.position.y-130,50,125)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  base1.display()
  computer.display();
  base2.display()
  computer2.display()
   //display Player and computerplayer


}
