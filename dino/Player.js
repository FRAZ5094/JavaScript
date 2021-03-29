class Player{
    constructor(){
        this.x=width/10;
        this.color=color(random(255),random(255),random(255));
        this.y=height;
        this.w=40;
        this.v=0;
        this.g=0.5;

        this.score=0;
        this.fitness=0;

        this.brain=new NeuralNetwork(1,8,2);
    }
    show(){
        stroke(10);
        fill(this.color)
        rect(this.x,this.y,this.w);
    }
    update(){
        this.score++;
        this.v+=this.g;
        this.y+=this.v;
        //this.y = constrain(this.y,0,floor-this.w);
        
        if (this.y>floor-this.w){
            this.y=floor-this.w;
            this.v=0;
        }
    }
    jump(){
        if (this.y>=floor-this.w){
        this.v=-10;
        //console.log("jumping");
        }
    }
    collision(enemies){

        let closest=null;
        let closestD=Infinity;
        for (let i=0;i<enemies.length;i++){
            let d=enemies[i].x-this.x;
            if (d<closestD){
                closest=enemies[i];
                closestD= d;
            }
        }
        if (this.x+this.w>=closest.x && closest.x+closest.w>=this.x){
            if (this.y+this.w>=closest.y){
                //console.log("collision");
                return true;
                
            }
        }
        return false;
    }
    think(enemies){

        let closest=null;
        let closestD=Infinity;
        for (let i=0;i<enemies.length;i++){
            let d=enemies[i].x-this.x;
            if (d<closestD){
                closest=enemies[i];
                closestD= d;
            }
        }
        //console.log(closestD);

        let inputs=[closest.x/width];
        let output=this.brain.predict(inputs);
        //console.log(output[0],output[1]);
        if (output[0]>output[1]){
            this.jump();
        }
    }
    mutate(){
        this.brain.mutate(0.1);
    }
}     