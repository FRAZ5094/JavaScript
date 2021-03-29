function nextGeneration(){
    console.log("generation")
    enemies=[new Enemy()];
    nextSpawn=counter+int(random(40,70));
    calculateFitness();

    for (let i=0;i<TOTAL;i++){
        players[i]=pickOne()
    }
    savedPlayers=[];
}

function calculateFitness(){

    let sum=0;

    for (let player of savedPlayers){
        sum+=player.score;
    }

    for (let player of savedPlayers){
        player.fitness=player.score/sum;
    }
}

function pickOne(){

    var index=0;
    var r=random(1);

    while(r>0){
        r=r-savedPlayers[index].fitness;
        index++;
    }
    index--;

    let child= new Player();
    let brain=savedPlayers[index].brain;
    child.brain=brain;
    child.mutate();
    return child;
}