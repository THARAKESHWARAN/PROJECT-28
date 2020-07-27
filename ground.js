class Ground {

    constructor(){
        this.x = 750;
        this.y = 690;
        this.width = 1500;
        this.height = 20;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height-10, {isStatic: true});
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }
}