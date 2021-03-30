let nn;

function setup(){
    createCanvas(600,400);
    nn= new NeuralNetwork(2,2,2);

    let inputs=[1,0];
    let targets=[1,0];

    nn.train(inputs,targets);
}

function draw(){
    background(0);
    
}