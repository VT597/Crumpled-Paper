class Paper
{
    constructor(x,y)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
  
        this.body=Bodies.circle(x,y,20,options);
        this.image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
            image(this.image,0,0)
			pop()
			
	}

}