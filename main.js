jinglebells = "";
harrypotter = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function preload(){
    jinglebells = loadSound("Jingle-Bells.mp3");
    harrypotter = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0, 600,500)
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x= " + leftWristX + "Left wrist y= " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x= " + rightWristX + "Right wrist y= " + rightWristY);
    }
    }