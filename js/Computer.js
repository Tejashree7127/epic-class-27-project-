class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");
    this.lifes1 = "green"
    this.lifes2 = "green"
    this.lifes3 = "green"

  

    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  lifes(){
    push();
    textSize(20);
    fill("white");
    text("computer",1080,40);

    fill(this.lifes1);
    rect(980,50,70,30)
    fill(this.lifes2); 
    rect(1050,50,70,30); 
    fill(this.lifes3);
    rect(1120,50,70,30)
    
    pop();
    //console.log(lifes)
  }
}
