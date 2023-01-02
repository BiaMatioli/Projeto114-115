function preload(){

}

function setup(){
    canvas = createCanvas(450, 400);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.size(450, 400);
    camera.hide();

    poseNet = ml5.poseNet(camera, modelLoaded)
    poseNet.on("pose", gotPose);
}

function draw(){
    image(camera, 0, 0, 450, 400);
}

function tirarFoto(){
    save("Foto com filtro.png");
}

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);

        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
    }
}