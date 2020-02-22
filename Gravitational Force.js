class Gravitation{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length : 150
        }
        this.force = Constraint.create(options);
        
        World.add(world,this.force);
    }
    display(){
        var pointA = this.force.bodyA.body.position;
        var pointB = pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}    