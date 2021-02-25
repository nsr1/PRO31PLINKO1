class Plinko{
    constructor(x,y,){  
    var options={
        isStatic:true,
    }
    this.x = x 
    this.y = y
    this.r = 10
    this.body = Bodies.circle(this.x, this.y, this.r, options)
    World.add(world,this.body)
    }

    display(){
        var pos =this.body.position
        push()
        translate(pos.x, pos.y)
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0,0,this.r,this.r)
        pop()
        

    }
}