    var path,boy, leftBoundary,rightBoundary;
    var pathImg,boyImg;
    var i;
    var bomb,coin,drink,power
    var bombImg,coinImg,drinkImg,powerImg
    
  function preload(){
    //to load all pictures and animation
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
    
    
  }

  function setup(){
    //to create gaming space 
    createCanvas(400,400);
    
    // Moving background
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale=1.2;

    //creating boy running
    boy = createSprite(180,340,30,30);
    boy.scale=0.08;
    boy.addAnimation("RunningJakson",boyImg);
      
    //to create and invisiblise left boundary 
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;

    //to create and invisiblise right boundary 
    rightBoundary=createSprite(410,0,100,800);
    rightBoundary.visible = false;

     
    

    }
    powerup()
  function draw() {
    //to give background color 
    background(0);
    //to give velocity 
    path.velocityY = 4;
    // to give coordination to the boy with mouse pointer 
    boy.x = World.mouseX;
    // to make sure that boy doesnt go out of screen or canvas 
    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
    
    //code to reset the background

      if(path.y > 400 ){
      path.y = height/2;
      } 
       
    // code to draw all sprites 
   drawSprites();
  }
