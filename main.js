status = "";
function preload(){

}
function setup(){
canvas = createCanvas(400, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0, 0, 400, 300);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}
function modelLoaded(){
    console.log("Model is loaded");
    status = true;
}