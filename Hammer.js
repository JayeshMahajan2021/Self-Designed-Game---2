class Hammer
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
			restitution:0.8,
			frictionAir:0.02,
			density:3,
			}
		this.x=x;
		this.y=y;
	  this.width=width;
    this.height=height;
		this.image=loadImage("Hammer-removebg-preview.png");
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options);
		World.add(world, this.body);

	}
	display()
	{
		
			var hammerpos=this.body.position;		
			push()
			translate(hammerpos.x, hammerpos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image,0,0,this.width, this.height);
			pop()
			
	}

}