class Boy {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image = loadImage("/img/boy.png");
        this.width = 300;
        this.height = 300;
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}