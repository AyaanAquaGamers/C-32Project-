class Bird extends BaseClass {
  constructor(x,y){
 super(x,y,50,50);
    this.image = loadImage("sprites/slug.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos=this.body.position
  
    

    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    

  //  for(var i=0; i<this.trajectory.length; i++){
    //  image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    
  //}
  pop();  
}
}
