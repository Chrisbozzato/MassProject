class Sun {

  constructor(x, y, m) {
    this.loc = createVector(x, y, m)
    this.vel = createVector(0.2, 0.3)
    this.acc = createVector(0, 0)
    this.mass = m
    this.r = sqrt(this.mass) * 10
  }

  applyforce(Force) {
    let f = p5.Vector.div(Force, this.mass);
    this.acc.add(f)
  }

  applyforce2(Force) {
    let f = p5.Vector.div(Force, this.mass1);
    this.acc.add(f)
  }

  display() {
    fill('yellow')
    circle(this.loc.x, this.loc.y, this.r * 2)
  }

  attract1() {
    let Force = p5.Vector.sub(this.loc, planet1.loc);
    let distance = constrain(Force.mag(), 25, 50)
    let pull = (this.mass * this.planet) / distance
    Force.setMag(pull)
    planet1.applyforce(Force)
  }

  attract2() {
    let Force = p5.Vector.sub(this.loc, planet2.loc);
    let distance = constrain(Force.mag(), 25, 50)
    let pull = (this.mass * this.Planet) / distance
    Force.setMag(pull)
    planet2.applyforce(Force)
  }

 attract3() {
    let Force = p5.Vector.sub(this.loc, meteor.loc);
    let distance = constrain(Force.mag(), 25, 50)
    let pull = (this.mass * this.Shootingstar) / distance
    Force.setMag(pull)
    meteor.applyforce(Force)
  }

  update() {
    this.loc.add(this.vel)
    this.vel.add(this.acc)
    this.acc.set(0, 0)
    this.vel.limit(6)
  }
}