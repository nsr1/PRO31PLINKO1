const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var plinkos = []
var particles = []
var divisions = []
var divisionHeight = 300

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(240,800,480,5)
  ground2 = new Ground(478,400,5,800)
  ground3 = new Ground(240,0,480,5)
  ground4 = new Ground(0,400,5,800)
 }

function draw() {
  background(0); 
  
  for(var k = 0; k <= width; k = k +80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }


  /*div1.display()
  div2.display()
  div3.display()
  div4.display()
  div5.display()
  div6.display()
  div7.display()
  div8.display()*/
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  drawSprites();
}