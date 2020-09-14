class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("square.png");
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      
      if(this.body.speed<8){
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
      }

      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
      }
      
     
    }
}