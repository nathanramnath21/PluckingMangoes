class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width=400;
      this.height=600
      this.image = loadImage("Plucking mangoes/tree.png")
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y+10)
      fill("brown");
      imageMode(CENTER);
      image(this.image, 0, -this.height/2, this.width, this.height);
      pop();

    }
  }