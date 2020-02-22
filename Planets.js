class Planet{
    constructor(x,y,radius){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,this.body.radius);
    }
}