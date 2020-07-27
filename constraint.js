class Constraints {

    constructor(bodyA, pointB) {
        this.bodyA = bodyA;
        this.pointB = pointB;
        var options = {
            bodyA: this.bodyA,
            pointB: this.pointB,
            stiffness: 0.01
        }
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    fly() {
        this.constraint.bodyA = null;
    }

    attach(body) {
        this.constraint.bodyA = body;
    }

    display() {

        if(this.constraint.bodyA){
        var point1 = this.constraint.bodyA.position;
        var point2 = this.pointB;
        
        push();
        strokeWeight(5);
        line(point1.x, point1.y, point2.x, point2.y);
        pop();

        }

    }
}