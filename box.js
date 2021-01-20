class Box{
   constructor(x,y,width,height){
       var options = {
           'restitution':0.8,
           'density':1.0,
           'friction':0.75
       }
       this.body = Bodies.rectangle(x,y,width,height);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
   }
   display(){
       var pos =this.body.position;
       rectMode(CENTER);
       fill("white");
       rect(pos.x, pos.y, this.width, this.height);
   }

   

}