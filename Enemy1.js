class Enemy1 extends BaseClass {
    constructor(x,y){
      super(x,y,500,300);
      this.image = loadImage("Thanos.png");
      this.remove = true;
    }
  
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        if(this.remove == true) {
          score = score + 50;
          this.remove = false;
        }
   
       }
       }
  
    }
  