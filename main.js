img=""
status=""

function preload(){
img=loadImage("carwithman.jpg")
}

function setup(){
    canvas=createCanvas(700,500)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
   document.getElementById("status").innerHTML="Status:Detecting Objects"
}

function draw(){
image(img,0,0,700,500)
fill("red")
textSize(20)
text("person",210,30)
text("car",100,80)

noFill()
stroke("red")
rect(200,10,200,450)
stroke("red")
rect(80,50,615,390)





}

function modelLoaded(){
 console.log("Model loaded successfully")
 status=true
 objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){console.log(error)}
    else{console.log(results)}
}