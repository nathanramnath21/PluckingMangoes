class Mango {
    constructor (x,y,r){
    var options={
    isStatic: false,
    restitution:0,
    friction:1,
    density:1.2
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r
    this.x= x
    this.y= y
    this.image = loadImage("Plucking mangoes/mango.png")
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      push();
      translate(pos.x, pos.y+10)
      fill("brown");
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
      }
}