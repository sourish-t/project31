

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, div1,div2,div3,div4,div5
var particles=[];
var plinkos=[];

function setup() {
  createCanvas(855,775);

  engine = Engine.create();
    world = engine.world;

ground = new Ground(430,750,850,50);

div1= new Division(30,380,20,700)
div2= new Division(230,380,20,700)
div3= new Division(430,380,20,700)
div4= new Division(630,380,20,700)
div5= new Division(830,380,20,700)
}



function draw() {
  background("black");

  for(var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
    
  }

  
  for(var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
    
  }


  for(var j = -10; j<=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  
  }


  for(var j = -35; j<=width-30; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
   
  }

  for(var j=0; j<plinkos.length; j++)
  {
    plinkos[j].display();
  }

if(frameCount%30===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
}

for(var j=0; j<particles.length; j++)
  {
    particles[j].display();
  }

  Engine.update(engine);

ground.display();

div1.display();
div2.display();
div3.display();
div4.display();
div5.display();




  drawSprites();
}