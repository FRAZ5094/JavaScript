class Point{
    constructor(x,y){
        this.bias=1;
        if (x){
            this.x=x;
            this.y=y; 
        } else{
            this.x=random(-1,1);
            this.y=random(-1,1);
        }

        


        //if above or below y=f(x), 1 above,-1 below
        let lineY=f(this.x);

        if (this.y>lineY){
            this.label=1;
        } else{
            this.label=-1
        }
    }
    show(){
        stroke(0)
        if (this.label==1){
            fill(255);
        } else {
            fill(0);

        }
        ellipse(this.pixelX(),this.pixelY(),32,32);
    }
    pixelX(){
        return map(this.x,-1,1, 0, width);
    }
    pixelY(){
        return map(this.y,-1,1, height, 0);
    }
}


function f(x){
    //y=mx+b
    return 0.3*x+0.2;
}