const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var thor;
score = 10;
function preload() {
bag = loadImage("Bg.jpg");

}


function setup() {  
engine = Engine.create();
world = engine.world;
var canvas = createCanvas(1360,620);
Ground = new ground(10,620,10000,10);
Ground1 = new ground(100,-400,10000,10);
Ground2 = new ground(-700,10,10,1000000);
Ground3 = new ground(1000,550,100,10)
hammer = new Hammer(250,540,165,165);
thanos = new Enemy1(1000,90);
ultron = new Enemy2(1000,480);
slingShot = new SlingShot(hammer.body,{x:220,y:50});
}


function draw() {
    background(bag);
    Engine.update(engine);
    text("Life: "+score, 500,20);
    thanos.display();
    ultron.display();
    slingShot.display();
    hammer.display();
    Ground.display();
    Ground1.display();
    Ground2.display();
    Ground3.display();
    
}

function mouseDragged(){
      Matter.Body.setPosition(hammer.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingShot.fly();
   
}
function keyPressed(){
    if(keyCode === 32) {
      Matter.Body.setPosition(hammer.body , {x: 250 , y: 540})
      slingShot.attach(hammer.body);
    }
  } 
  