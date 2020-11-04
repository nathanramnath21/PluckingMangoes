const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree, stone, boy, rope;
var mango1, mango2, mango3, mango4, mango5;

function preload(){
    boy = loadImage("Plucking mangoes/boy.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tree = new Tree(900,600,10,10);
    ground= new Ground(1200,600,2400,20)
    stone= new Stone(200,500,40)
    rope = new Rope(stone.body,{x:200, y:500})
    mango1= new Mango(1000,300,30)
    mango2= new Mango(1000,300,30)
    mango3= new Mango(1000,300,30)
}

function draw(){
    background(137, 137, 137)
    Engine.update(engine);

    ground.display();
    tree.display();
    stone.display();
    image(boy,150,440,200,200);
     rope.display();
     mango1.display();
}
