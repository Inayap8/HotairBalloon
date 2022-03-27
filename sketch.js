var balloon,database,pos,img,bg
function preload(){
  bg=loadImage("fun-fair.jpg")
  img=loadImage("image-.png")
}
function setup(){
createCanvas(1800,850);
balloon=createSprite(300,700,50,50)

balloon.addImage(img)
database=firebase.database()


database.ref("Balloon").on("value",handleData,showError)
}
function draw(){
  background(bg)
  if(pos!=undefined){
  if(keyDown("up")){writeData(0,-5)}
   if(keyDown("down")){writeData(0,5)}
   if(keyDown("left")){writeData(-5,0)}
   if(keyDown("right")){writeData(5,0)}
  }

  if(balloon.y<=600&balloon.y>500){
    balloon.scale=0.9
  }
  else if(balloon.y<500&balloon.y>400){
   balloon.scale=0.8
  }
  else if(balloon.y<400&balloon.y>300){
    balloon.scale=0.7
   }
   else if(balloon.y<300&balloon.y>200){
    balloon.scale=0.6
   }
   else if(balloon.y<200){
    balloon.scale=0.5
   }
drawSprites();
}
function handleData(data){
  pos=data.val()
 // console.log(26,pos,balloon.x,balloon.y)
  balloon.x=pos.x
  balloon.y=pos.y
}

function showError(){
  console.log("error in reading database")
}

function writeData(x,y){
  database.ref("Balloon").update({"x":pos.x+x,"y":pos.y+y})
}