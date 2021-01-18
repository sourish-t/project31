class Plinko{
	constructor(x,y,r)
	{
		var options={
			isStatic:true
			/*restitution:0.3,
			friction:0.5,
			density:1.2*/

			
            }
            
	this.x=x;
	   this.y=y;
	   this.r=10;
	this.body=Bodies.circle(this.x, this.y, 10, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var Paperpos=this.body.position;		

		push()
			translate(Paperpos.x, Paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("cyan")
		ellipse(0,0,10,this.r);
			pop();
			
	}

}