noseX=0;
noseY=0;
clown="";
function preload()
{
clown=loadImage("https://i.postimg.cc/zBZTF9Ry/sun-removebg-preview.png");
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model Is Ready");
}

function draw()
{
    image(video, 0, 0, 500, 500);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX-75, noseY+60, 30);
    push();
    imageMode(CENTER);
    image(clown, noseX-70, noseY, 200, 150);
    pop();
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + noseX );
        console.log("nose y = " + noseY);

    }
}

