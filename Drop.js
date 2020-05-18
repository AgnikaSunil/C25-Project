class Drop{
    constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.update();
    }

    draw(){
        if(Math.random()>0.1)
            fill(0,255,255);
        else
            fill(0,128,255);
        rect(this.x,this.y,5,10);        
    }

    update(){
        this.y = this.y+20;
        if(this.y>height+80){
            this.y = random(0,20);
            this.x = random(0,width);
        }
        this.draw();
    }
}