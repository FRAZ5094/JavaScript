class Enemy{
    constructor(){
        this.x=width+10;
        this.w=20
        this.y=floor-this.w;
        
    }
    show(){
        fill("red");
        rect(this.x,this.y,this.w);
    }
    move(){
        this.x-=5
    }
}