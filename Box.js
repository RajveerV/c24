class Box{
    constructor(x,y,width,height){
        var options ={
           resttution:1,
           friction:2,
           density:1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        var angle = this.body.angle;
        push ()
        translate (this.body.position.x,this.body.position.y);
        rotate (angle)
        fill("brown")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop ()
    }
}