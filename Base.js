class Base {
constructor(x,y,width,height){
   
    var options = {
    isStatic:true
    }
    this.image=loadImage("./assets/base1.png")
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body);
}
display(){
  var angle=this.body.angle
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    rotate(angle)
   imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
    pop()
}

}