const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var runner1,runner1_pic;
var ground;
var backgroundImage;
var angryppl,angryppl_image
var diamonds,diamonds_pic;
var fireball,fireball_pic;
var shuriken,shuriken_pic;
var snakes,snakes_pic;
var stones,stones_pic;
var diamonds,diamondsGroup;
var obstacles,obstaclesGroup;
var life,life_image;
var levels,levels_image
var score=0;

function preload()
{
   backgroundImage=loadImage("background.jpg")
   runner1_pic=loadImage("running boy.jpg");
   diamonds_pic=loadImage("diamonds.png");
   fireball_pic=loadImage("fireball.png");
   shuriken_pic=loadImage("shuriken.png");
   snakes_pic=loadImage("snakes.png");
   stones_pic=loadImage("stones.png");
   angryppl_image=loadImage("angryppl.png");
   life_image=loadImage("life.png");
   levels_image=loadImage("levels.png");
}

function setup()
{
   var canvas= createCanvas(1400,600);
   
   //bg=createSprite(700,400,1400,800)
   //bg.addImage(backgroundImage)
   //bg.scale=2;

   score=0;
   

   runner1= createSprite(70,450,20,40);
   runner1.addImage(runner1_pic)
   runner1.scale=0.4;

  life1=createSprite(1300,100,10,10)
   life1.addImage(life_image)
   life1.scale=0.02;
   
   life2=createSprite(1250,100,10,10)
   life2.addImage(life_image)
   life2.scale=0.02;

   life3=createSprite(1200,100,10,10)
   life3.addImage(life_image)
   life3.scale=0.02;
   
   
   
  // levels=createSprite(700,300,70,70)
   //levels.addImage(levels_image)
   //levels.scale=0.4

  // angryppl=createSprite(100,700,20,40);
   //angryppl.addImage(angryppl_image)
   //angryppl.scale=0.4;
   
   ground=createSprite(700,600,1400,20)
   
  diamondsGroup = new Group();
  obstaclesGroup = new Group();
  
   //bg.velocityX=-4;
   //bg.x=bg.width/2;
}

function draw()
{
 background("white")
 
 if(gameState===PLAY)
 {
   text("SCORE:"+score,100,100) 

   //if(bg.x<1300)
    {
       // bg.x=bg.width/2;
    }

    runner1.collide(ground);

    if(keyDown(UP_ARROW)&&(runner1.y>=500))
    {
       runner1.velocityY=-13;
    }
     
    runner1.velocityY= runner1.velocityY+0.8;

    Diamonds();
    Obstacles();

    if(runner1.isTouching(diamondsGroup))
    {
       diamondsGroup.destroyEach();
       score+=1
    }

    if(runner1.isTouching(obstaclesGroup))
    {
       obstaclesGroup.destroyEach();
       life1.visible="false";
    }
   }

   if(runner)
   if(gameState===END)
   {
     
   }



    drawSprites();

      
}

function Diamonds()
{
   if(frameCount%200===0)
    {
      diamonds= createSprite(1400,random(470,560),30,30);
       diamonds.addImage(diamonds_pic);
       diamonds.scale=0.05;
       diamonds.velocityX=-8;
      diamonds.lifetime=200;

      diamondsGroup.add(diamonds)

      
    }    
}

function Obstacles()
{
 if(frameCount%120===0)
 {
    var obstacle= createSprite(1400,random(520,570),30,30);
    obstacle.velocityX=-13;
    obstacle.scale=0.05;
    obstacle.lifetime=200;
    var rand=Math.round(random(1,4));
    switch(rand)
    {
      case 1:obstacle.addImage(stones_pic)
      break;
      case 2:obstacle.addImage(snakes_pic)
      break;
      case 3:obstacle.addImage(shuriken_pic)
      break;
      case 4:obstacle.addImage(fireball_pic)
      break;
      
      default:
      break;

      obstaclesGroup.add(obstacle)

    }

 }
}