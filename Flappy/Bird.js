class Bird{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r/2;
        this.v=0;
        this.g=0.3;

    }
    show(){
        fill(255, 204, 100);
        circle(this.x,this.y,this.r/2);
    }
    update(pillar){
        this.v+=this.g;
        this.y+=this.v;
    }
    jump(){
        this.v=-8;
    }


}
