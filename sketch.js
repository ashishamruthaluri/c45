var cat,catImage
var dog,dogImage
var water,waterImage
var milk,milkImage
var mouse,mouseImage
var gameState = "start"
var score = 0
var bg1,bg2,bg3,bg1Image,bg2Image,bg3Image

function preload(){
  catImage = loadImage("cat.png")
  dogImage = loadImage("dog.png")
  waterImage = loadImage("water.png")
  mouseImage = loadImage("mouse.png")
  milkImage = loadImage("milk.png")
  bg1Image = loadImage("bg1.jpg")
  bg2Image = loadImage("bg2.jpg")
  bg3Image = loadImage("bg3.webp")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  cat = createSprite(300, 200, 50, 50);
  water = createSprite(200, 100, 50, 50);
  milk = createSprite(600, 300, 50, 50);
  mouse = createSprite(500, 400, 50, 50);
  dog = createSprite(400, 600, 50, 50);
  bg1 = createSprite (width/2,height/2,50,50)
  bg2 = createSprite (width/2,height/2,50,50)
  bg3 = createSprite(width/2,height/2,50,50)
  
  cat.addImage(catImage)
  dog.addImage(dogImage)
  milk.addImage(milkImage)
  mouse.addImage(mouseImage)
  water.addImage(waterImage)
  bg1.addImage(bg1Image)
  bg2.addImage(bg2Image)
  bg3.addImage(bg3Image)
  cat.scale = 0.4
  dog.scale = 0.4
  mouse.scale = 0.2
  milk.scale = 0.4
  water.scale = 0.07
  bg1.scale = 1
  bg2.scale = 1
  bg3.scale = 1
  cat.visible = false
  water.visible = false
  mouse.visible = false
  dog.visible = false
  milk.visible = false
  bg1.visible = false
  bg2.visible = false
  bg3.visible = false
  if (gameState == "start"){
    text("Life of a cat",width/2 +20 ,220)
    button = createButton("play") 
    button.position (width/2,height/2)
    button.size (100,50)
    button.mousePressed(()=>{
      button.hide()
    gameState = "PLAY"
    bg2.visible = true
    bg1.visible = false
    bg3.visible = false
    
    })

    
  
 
 
    
   }

  

}

function draw() {
  //background(51);
  if (gameState == "PLAY"){
    cat.visible = true
    dog.visible = true
    mouse.visible = true
    milk.visible = true
    water.visible = true
    bg1.visible = true
    bg2.visible = false
    bg3.visible = false
    
    
    

    

    
  
    controls()
    
   
    if (cat.isTouching(water)) {
      cat.destroy()
      gameState = "end"
    
    
    }
    
  }
  if (gameState == "end"){
    cat.destroy()
    mouse.destroy()
    dog.destroy()
    water.destroy()
    milk.destroy()
    bg3.visible = true
    bg1.visible = false
    bg2.visible = false
    
  
  } 

  
  drawSprites();
}
  
  
  
  

function controls(){
 if (keyDown(LEFT_ARROW)){
cat.x -= 5
 }
 if (keyDown(RIGHT_ARROW)){
  cat.x += 5
   }
   if (keyDown(DOWN_ARROW)){
    cat.y -= 5
     }
}

  