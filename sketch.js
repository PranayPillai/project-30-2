const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,stand1,stand2;
//blocks for tower 1
var block1,block2,block3,block4,block5,block6,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot;
var polygon,polygonimg;
function preload()
{
	polygonimg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1300, 500);

	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground1 = new Ground(650,480,1300,20);
	stand1 = new Ground(380,400,300,20);
	stand2 = new Ground(880,250,300,20);

	polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);

	slingShot = new SlingShot(this.polygon,{x : 100 , y : 100});

	//creating blocks for tower 1
	//level1
	block1 = new Box(300,395,30,40);
	block2 = new Box(330,395,30,40);
	block3 = new Box(360,395,30,40);
	block4 = new Box(390,395,30,40);
	block5 = new Box(420,395,30,40);
	block6 = new Box(440,395,30,40);
	block7 = new Box(470,395,30,40);
	//level 2
	block8 = new Box(330,235,30,40);
	block9 = new Box(360,235,30,40);
	block10 = new Box(390,235,30,40);
	block11 = new Box(420,235,30,40);
	block12 = new Box(450,235,30,40);
	//level 3
	block13 = new Box(360,195,30,40);
	block14 = new Box(390,195,30,40);
	block15 = new Box(420,195,30,40);
	//top
	block16 = new Box(390,155,30,40);

	//creating blocks for tower 2
	//level 1
	block17 = new Box(770,230,30,40);
	block18 = new Box(800,230,30,40);
	block19 = new Box(830,230,30,40);
	block20 = new Box(860,230,30,40);
	block21 = new Box(890,230,30,40);
	block22 = new Box(920,230,30,40);
	block23 = new Box(950,230,30,40);
	//level 2
	block24 = new Box(810,120,30,40);	
	block25 = new Box(840,120,30,40);
	block26 = new Box(870,120,30,40);
	block27 = new Box(900,120,30,40);
	block28 = new Box(930,120,30,40);
	//level 3
	block29 = new Box(850,20,30,40);
	block30 = new Box(880,20,30,40);
	block31 = new Box(910,20,30,40);
	//top
	block32 = new Box(890,0,30,40);

	



  
}


function draw() {
  background(0);

  ground1.display();
  stand1.display();
  stand2.display();
  // display for tower 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //display for tower 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  slingShot.display();


  
  imageMode(CENTER);
  image(polygonimg,polygon.position.x,polygon.position.y,40,40);

 
}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		slingShot.attach(this.polygon);
	}
}
