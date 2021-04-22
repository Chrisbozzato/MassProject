class Shootingstar{
  
  constructor(x,y,m){
    this.loc=createVector(x,y,m)
    this.vel=createVector(1,1)
    this.acc=createVector(0,0)
    this.mass=m
  }
  
  applyforce(Force) {
    let f = p5.Vector.div(Force, this.mass);
    this.acc.add(f)
  }
  
  update() {
    this.loc.add(this.vel)
    this.vel.add(this.acc)
    this.acc.set(0, 0)
    this.vel.limit(13)
  }
  
  display(){
   this.size = 30
    fill(10,10,10)
    while(this.vel >= 5){
      this.size -=3
    }
    circle(this.loc.x,this.loc.y, this.size)
  }
}