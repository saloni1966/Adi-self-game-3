var mfb,inviswall,triggerwalls,ctrlstation,
myself,suprisedbull,cowfee,controlIMG,mfbIMG,cowfeeIMG,spawnIMG,riverIMG,roadImg,uphillIMG2,laneIMG,hmIMG,myselfIMG
var ground,prkshbhaiya,prkshbhaiyaIMG,suprisedbullIMGm
var start = 0,play =  1,end=2;
var gameState = start;

function preload(){
//load all the images
controlIMG = loadImage("game img/background imgs/control point.png");
mfbwalking = loadAnimation("game img/pcs and npcs/mfb animations/pc1.png","game img/pcs and npcs/mfb animations/pc2.png")

spawnIMG = loadImage("game img/background imgs/spawnpoint.png");
riverIMG = loadImage("game img/background imgs/river side.png");
roadImg  = loadImage("game img/background imgs/road.png");
uphillIMG = loadImage("game img/background imgs/uphill.png");
uphillIMG2 = loadImage("game img/background imgs/uphill control point.png");
laneImg = loadImage("game img/background imgs/knsmrdni mrg.png");
hmIMG = loadImage("game img/background imgs/hmm.png");
mrkt = loadImage("game img/background imgs/randm mrkt i fnd n  da intrnt.png");


cowfeeIMG = loadImage("game img/pcs and npcs/cowfee.png");
myselfIMG = loadImage("game img/pcs and npcs/meself.png");
prkshbhaiyaIMG = loadImage ("game img/pcs and npcs/prkshbhaiya.png")
suprisedbullIMG = loadImage("game img/pcs and npcs/sprsdbl.png")
mfbIMG = loadAnimation("game img/pcs and npcs/mfb.png")
}
 
function setup(){
    //canvas
 createCanvas(displayWidth,displayHeight);
 mfb=createSprite(1000,200);
 mfb.addAnimation("mfbIMG",mfbIMG);
 mfb.addAnimation("mfbwalking",mfbwalking);
 mfb.scale=3
 cowfee=createSprite(200,200);
 cowfee.addImage("cowfeeIMG",cowfeeIMG)
 myself=createSprite(200,200);
 myself.addImage("myselfIMG",myselfIMG)
 prkshbhaiya=createSprite(200,200);
 prkshbhaiya.addImage("prkshbhaiyaIMG",prkshbhaiyaIMG)
 suprisedbull=createSprite(200,200);
 suprisedbull.addImage("suprisedbullIMG",suprisedbullIMG)
 //done
 
}

function draw() {

if(gameState === start){
    background("black");

    mfb.destroy();
  cowfee.destroy()
  prkshbhaiya.destroy()
  suprisedbull.destroy()
  myself.destroy()
  
    var heading = createElement("h1");
    heading.html("ADVENTURE SERIES 1");
   heading.style('color','white')
    heading.position(width/2,100);
    var startButton = createButton("START ADVENTURE");
    startButton.position(width/2,height/2);
    drawSprites();


    startButton.mousePressed(()=>{

        removeElements();
        frameCount = 0;
        setup();

        gameState = play;
       
        
      
          
       });
}

 


if(gameState === play){
    //play the cutscene

   
   //all the sprites load
   
    background(spawnIMG);
    cowfee.destroy()
  prkshbhaiya.destroy()
  suprisedbull.destroy()
  myself.destroy()

  if(keyDown("left")||keyDown("a")){
    mfb.changeAnimation("mfbwalking",mfbwalking);

  }
    drawSprites();


}

}
