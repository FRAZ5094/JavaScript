//percentron supervised learning

let inputs;
let brain;
let points=[];
let trainingIndex=0;

function setup(){
    createCanvas(800,800);
    brain= new Perceptron(3);

    for (let i=0;i<100;i++){
        points.push(new Point());
    }
}

function draw(){
    background(255);
    stroke(0);
    let x1=-1;
    let x2=1;
    let p1= new Point(x1,f(x1));
    let p2= new Point(x2,f(x2));
    line(p1.pixelX(),p1.pixelY(),p2.pixelX(),p2.pixelY());

    let p3 = new Point(x1,brain.guessY(x1));
    let p4= new Point(x2,brain.guessY(x2));
    line(p3.pixelX(),p3.pixelY(),p4.pixelX(),p4.pixelY());





    for (let point of points){
        point.show();
    }

    for (let point of points){
        let inputs=[point.x,point.y,1];
        let target=point.label;
        //brain.train(inputs,target);

        let guess=brain.guess(inputs);
        if (guess==target){
            fill(0,255,0);
        } else{
            fill(255,0,0);
        }
        noStroke();
        ellipse(point.pixelX(),point.pixelY(),16,16);
    }

    let training=points[trainingIndex];
    let inputs=[training.x,training.y,training.bias];
    let target=training.label;
    brain.train(inputs,target);
    trainingIndex++;

    if (trainingIndex==points.length){
        trainingIndex=0;
    }

}


function mousePressed(){
    for (let point of points){
        let inputs=[point.x,point.y];
        let target=point.label;
        brain.train(inputs,target);
    }
}
