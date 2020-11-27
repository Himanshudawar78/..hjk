const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a;
var circles=[];
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

  ground = new Ground(410,700,400,20);
//line1 r to l
  b1 = new Box(260,658,60,60);
  b2 = new Box(320,658,60,60);
  b3 = new Box(380,658,60,60);
  b4 = new Box(440,658,60,60);
  b5 = new Box(500,658,60,60);
  b6 = new Box(560,658,60,60);
  //line2 r to l
  b7 = new Box(320,598,60,60);
  b8 = new Box(380,598,60,60);
  b9 = new Box(440,598,60,60);
  b10 = new Box(500,598,60,60);
  //line3 r to l
  b11 = new Box(380,538,60,60);
  b12 = new Box(440,538,60,60);
  //top block
  b13 = new Box(410,478,60,60);

}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 ground.display();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 