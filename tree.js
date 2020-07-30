class Tree{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image = loadImage("./img/tree.png");
        this.width = 500;
        this.height = 500;
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}