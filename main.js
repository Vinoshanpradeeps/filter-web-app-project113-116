function preload(){

}

function setup(){
    canvas = createCanvas(1200, 390);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.y);
    }
  }

function draw(){
    image(video, 470, 50, 300, 300);
}

function take_snapshot(){
    save('clown_image.png');
}
