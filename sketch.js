const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
// var particles = [];
var plinkos = [];
var divisions = [];
var particles = [];
var divisionHeight=300;
//var particle;
var count = 0;
var score = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
Engine.run(engine);
    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : " + score,20,30);
  Engine.update(engine);
 
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(count < 5){
     var randX1 = width/4;
     var randX2 = (width/4) + (width/2)
     particles.push(new Particle(random(randX2, randX1), 10,10));
     //score++;
     count++;
   }
 if(particles[j] != null){
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
  }
   if(particles[j].body.position.y > 760){
     if(particles[j].body.position.x < 300){
       score = score + 500;
     }

   }
  }
}



