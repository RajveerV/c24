const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground ; 
var pig1,pig2 ;
var log1,log2,log3,log4 ;


function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,590,1600,20);

    box1 = new Box(1200,550,70,70);
    box2 = new Box(1420,550,70,70);
    pig1 = new Pig(1310,570)
    log1 = new Log(1310,530,300,PI/2)

    box3 = new Box(1200,500,70,70);
    box4 = new Box(1420,500,70,70);
    pig2 = new Pig(1310,520)
    log2 = new Log(1310,480,300,PI/2);

    box5 = new Box(1310,460,70,70)
    log3 = new Log(1260,440,150,PI/7)
    log4 = new Log(1370,440,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    
}