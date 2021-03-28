class Pillar{
    constructor(){
        this.width=100;
        this.spacing=200  ;
        this.top = random(0,height-this.spacing);
        this.bottom = this.top+this.spacing;
        this.x=width;
    }
    show(){
        fill("red");
        rect(this.x,0,this.width,this.top);
        rect(this.x,this.bottom,this.width,height);

    }
    move(){
        this.x-=4;
    }
}