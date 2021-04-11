class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 200
        }
        this.pointB=pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA.position);{
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,PointB.y);
        }
    }
}